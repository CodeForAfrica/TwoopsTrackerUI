import { A } from "@commons-ui/core";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { getSession } from "next-auth/react";
import PropTypes from "prop-types";
import React, { useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import Progress from "./Progress";

import icUpload from "@/twoopstracker/assets/icons/upload.svg";
import Image from "@/twoopstracker/components/Image";
import fetchJson from "@/twoopstracker/utils/fetchJson";

const handleUpload = async (content) => {
  if (!content) {
    return null;
  }
  const session = await getSession();
  return fetchJson(
    `${process.env.TWOOPSTRACKER_API_URL}/lists/upload`,
    session,
    {
      method: "POST",
      body: content,
    }
  );
};

const useStyles = makeStyles(({ typography }) => ({
  root: {},
  dropzone: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "2px dashed #ccc",
    paddingTop: typography.pxToRem(60),
    paddingBottom: typography.pxToRem(30),
  },
  template: {
    textAlign: "center",
    marginTop: typography.pxToRem(60),
    marginBottom: typography.pxToRem(60),
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  dragLabel: {
    textAlign: "center",
  },
  button: {
    marginBottom: typography.pxToRem(30),
  },
  success: {
    color: "green",
    marginBottom: typography.pxToRem(30),
  },
  error: {
    color: "#f44336",
    marginBottom: typography.pxToRem(30),
  },
}));

function Upload({
  conjuctionLabel,
  downloadCopy,
  errorLabel,
  failedLabel,
  loadingLabel,
  uploadLabel,
  templateLink,
  dragLabel,
  templateName,
  ...props
}) {
  const classes = useStyles(props);
  const [loading, setLoading] = React.useState(false);
  const [messages, setMessages] = React.useState();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    // From a note @ https://react-dropzone.js.org/#browser-limitations:
    // Mime type determination is not reliable across platforms. CSV files,
    // for example, are reported as text/plain under macOS but as
    // application/vnd.ms-excel under Windows. In some cases there might
    // not be a mime type set at all.
    accept: "text/csv,application/vnd.ms-excel,text/plain,", // note the comma, for when no mime-type is set
    multiple: false,
  });
  const processFile = useCallback(async () => {
    setLoading(true);
    setLoading();
    setMessages();
    try {
      if (acceptedFiles[0].name.toLocaleLowerCase().endsWith(".csv")) {
        const formData = new FormData();
        formData.append("file", acceptedFiles[0]);
        const response = await handleUpload(formData);
        setLoading(false);
        setMessages(response);
      } else {
        setMessages({
          errors: [{ message: "Only CSV (.csv) files are supported" }],
        });
      }
    } catch (err) {
      setMessages({ errors: [{ message: errorLabel }] });
    }
  }, [acceptedFiles, errorLabel]);

  useEffect(() => {
    if (acceptedFiles?.length) {
      processFile();
    }
  }, [acceptedFiles, processFile]);

  return (
    <div className={classes.root}>
      <div {...getRootProps({ className: classes.dropzone })}>
        <input {...getInputProps()} />
        {!messages && (
          <>
            <Image width={60} height={60} src={icUpload} />
            <Typography variant="body1" className={classes.dragLabel}>
              {dragLabel}
            </Typography>
            <Typography variant="body1" className={classes.dragLabel}>
              {conjuctionLabel}
            </Typography>
          </>
        )}
        {messages?.lists_proccessed && (
          <>
            <Progress
              value={
                (messages.lists_proccessed.success * 100) /
                ((messages.lists_proccessed?.success ?? 0) +
                  (messages.lists_proccessed?.failed ?? 0) || 1)
              }
            />
            {messages.lists_proccessed?.failed > 0 && (
              <Typography variant="caption" className={classes.error}>
                {messages.lists_proccessed?.failed} {failedLabel}
              </Typography>
            )}
          </>
        )}
        {!loading && messages?.errors ? (
          messages.errors?.map(({ message }) => (
            <Typography variant="caption" className={classes.error}>
              {message}
            </Typography>
          ))
        ) : (
          <Typography variant="caption" className={classes.success}>
            {messages?.message}
          </Typography>
        )}
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? loadingLabel : uploadLabel}
        </Button>
      </div>

      <Typography variant="body1" className={classes.template}>
        {downloadCopy} <A href={templateLink}>{templateName}</A>{" "}
      </Typography>
    </div>
  );
}

Upload.propTypes = {
  conjuctionLabel: PropTypes.string,
  downloadCopy: PropTypes.string,
  dragLabel: PropTypes.string,
  errorLabel: PropTypes.string,
  failedLabel: PropTypes.string,
  loadingLabel: PropTypes.string,
  templateLink: PropTypes.string,
  templateName: PropTypes.string,
  uploadLabel: PropTypes.string,
};

Upload.defaultProps = {
  conjuctionLabel: undefined,
  downloadCopy: undefined,
  dragLabel: undefined,
  errorLabel: undefined,
  failedLabel: undefined,
  loadingLabel: undefined,
  templateLink: undefined,
  templateName: undefined,
  uploadLabel: undefined,
};

export default Upload;
