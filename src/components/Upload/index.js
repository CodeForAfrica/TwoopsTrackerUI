import { A } from "@commons-ui/core";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { getSession } from "next-auth/client";
import PropTypes from "prop-types";
import React, { useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { ReactComponent as IcUpload } from "@/twoopstracker/assets/icons/upload.svg";
import fetchJson from "@/twoopstracker/utils/fetchJson";

const handleUpload = async (content) => {
  if (!content) {
    return null;
  }
  const session = await getSession();
  return fetchJson(
    `${process.env.NEXT_PUBLIC_TWOOPSTRACKER_API_URL}/lists/upload`,
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
  },
  error: {
    color: "#f44336",
  },
}));

function Upload({
  conjuctionLabel,
  downloadCopy,
  errorLabel,
  successLabel,
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
    accept: "text/csv",
  });
  const processFile = useCallback(async () => {
    setLoading(true);
    setLoading();
    setMessages();
    try {
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);
      const response = await handleUpload(formData);
      setLoading(false);
      if (response.errors) {
        setMessages(response);
      } else {
        setMessages({ success: successLabel });
      }
    } catch (err) {
      setMessages({ errors: [{ message: errorLabel }] });
    }
  }, [acceptedFiles, successLabel, errorLabel]);

  useEffect(() => {
    if (acceptedFiles?.length) {
      processFile();
    }
  }, [acceptedFiles, processFile]);

  return (
    <div className={classes.root}>
      <div {...getRootProps({ className: classes.dropzone })}>
        <input {...getInputProps()} />
        <IcUpload />
        <Typography variant="body1" className={classes.dragLabel}>
          {dragLabel}
        </Typography>
        <Typography variant="body1" className={classes.dragLabel}>
          {conjuctionLabel}
        </Typography>
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          disabled={loading}
        >
          {loading ? loadingLabel : uploadLabel}
        </Button>
        {!loading &&
          messages?.errors &&
          messages.errors?.map(({ message }) => (
            <Typography variant="caption" className={classes.error}>
              {message}
            </Typography>
          ))}
        {!loading && messages?.success && (
          <Typography variant="caption" className={classes.success}>
            {messages?.success}
          </Typography>
        )}
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
  loadingLabel: PropTypes.string,
  successLabel: PropTypes.string,
  templateLink: PropTypes.string,
  templateName: PropTypes.string,
  uploadLabel: PropTypes.string,
};

Upload.defaultProps = {
  conjuctionLabel: undefined,
  downloadCopy: undefined,
  dragLabel: undefined,
  errorLabel: undefined,
  successLabel: undefined,
  loadingLabel: undefined,
  templateLink: undefined,
  templateName: undefined,
  uploadLabel: undefined,
};

export default Upload;
