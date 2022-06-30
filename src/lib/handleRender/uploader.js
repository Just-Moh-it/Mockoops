import S3 from "react-aws-s3";

const S3_BUCKET = process.env.NEXT_PUBLIC_S3_BUCKET_NAME;
const REGION = process.env.NEXT_PUBLIC_S3_REGION;
const ACCESS_KEY = process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY;
const URL = process.env.NEXT_PUBLIC_S3_URL;

const config = {
  bucketName: S3_BUCKET,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
  s3Url: URL,
};

const ReactS3Client = new S3(config);

export default ReactS3Client;
