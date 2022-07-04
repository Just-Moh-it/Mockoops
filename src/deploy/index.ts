import {
  deployFunction,
  deploySite,
  getOrCreateBucket,
} from "@remotion/lambda";
import dotenv from "dotenv";
import path from "path";
import { usedRegions } from "./regions";
dotenv.config();

console.log(`Found account. Deploying...`);

const execute = async () => {
  for (const region of usedRegions) {
    console.log(`Deploying to region ${region}`);

    const { functionName } = await deployFunction({
      architecture: "arm64",
      createCloudWatchLogGroup: true,
      memorySizeInMb: 2048,
      timeoutInSeconds: 240,
      region,
    });
    console.log(`Deployed function "${functionName}" to ${region} in account`);
    const { bucketName } = await getOrCreateBucket({ region });
    const { serveUrl } = await deploySite({
      siteName: "mockoops",
      bucketName,
      entryPoint: path.join(process.cwd(), "/src/remotion/index.js"),
      region,
    });
    console.log(`Deployed site to ${region} in account under ${serveUrl}`);
  }
};

execute()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
