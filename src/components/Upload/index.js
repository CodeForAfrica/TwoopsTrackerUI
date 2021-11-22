import { A } from "@commons-ui/core";
import { Button, makeStyles, Typography } from "@material-ui/core";
import { DropzoneArea } from "material-ui-dropzone";
import PropTypes from "prop-types";
import React, { useEffect, useCallback } from "react";

import { ReactComponent as IcUpload } from "@/twoopstracker/assets/icons/upload.svg";
import { createList } from "@/twoopstracker/lib";
// upload file with fetch
const handleUpload = (content) => {
  if (!content) {
    return null;
  }
  return createList(content, "/api/accounts/lists");
};

const useStyles = makeStyles(({ typography }) => ({
  root: {
    marginTop: typography.pxToRem(60),
    maxWidth: typography.pxToRem(1140),
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
}));

function Upload({
  conjuctionLabel,
  downloadCopy,
  errorLabel,
  loadingLabel,
  uploadLabel,
  templateLink,
  dragLabel,
  templateName,
  ...props
}) {
  const classes = useStyles(props);
  const [file, setFile] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState();

  const handleChange = (selectedFile) => {
    setFile(selectedFile);
  };

  const processFile = useCallback(async () => {
    setLoading(true);
    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const text = reader.result;
        const lines = text.split("\n");
        const result = lines.reduce(
          (acc, line, index) => {
            if (index === 0) {
              acc.is_private = line.split(",")[0].trim().toLowerCase === "yes";
            } else {
              const [screenName] = line.split(",");
              acc.accounts.push({ screen_name: screenName.trim() });
            }
            return acc;
          },
          {
            name: file[0].name,
            accounts: [],
          }
        );
        await handleUpload(result);
        setLoading(false);
      };
      reader.readAsText(file[0]);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }, [file]);

  useEffect(() => {
    if (file?.length) {
      processFile();
    }
  }, [file, processFile]);

  return (
    <div className={classes.root}>
      <DropzoneArea
        dropzoneText=""
        Icon={() => (
          <>
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
            {!loading && error && (
              <Typography variant="caption" className={classes.error}>
                {errorLabel}
              </Typography>
            )}
          </>
        )}
        filesLimit={1}
        showPreviewsInDropzone={false}
        showPreviews={false}
        acceptedFiles={[".csv"]}
        onChange={handleChange}
      />
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
  templateLink: PropTypes.string,
  templateName: PropTypes.string,
  uploadLabel: PropTypes.string,
};
Upload.defaultProps = {
  conjuctionLabel: undefined,
  downloadCopy: undefined,
  dragLabel: undefined,
  errorLabel: undefined,
  loadingLabel: undefined,
  templateLink: undefined,
  templateName: undefined,
  uploadLabel: undefined,
};

export default Upload;
