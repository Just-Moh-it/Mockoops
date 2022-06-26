import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./index.module.scss";

const DropBox = ({
  icon,
  onDrop,
  title,
  subtitle,
  label,
  file,
  fileURL,
  deleteFile,
  ...props
}) => {
  const handleDrop = useCallback((acceptedFiles) => {
    onDrop(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  if (file)
    return (
      <label className={styles.wrapper}>
        {icon}
        <button className={styles.close} onClick={deleteFile}>
          {"×"}
        </button>
        <p className={styles.title}>File Uploaded</p>
        <p className={styles.details}>{file.name}</p>
      </label>
    );

  return (
    <label
      {...getRootProps()}
      className={["file", isDragActive ? "active" : ""].join(" ")}
      htmlFor={title}
    >
      <input type="file" {...props} id={title} {...getInputProps()} />
      {icon}
      <span className="title">{title}</span>
      <span className="subtitle">{subtitle}</span>
    </label>
  );
};

export default DropBox;
