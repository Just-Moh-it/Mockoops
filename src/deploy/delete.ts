import {
  getFunctions,
  deleteFunction,
  deleteSite,
  getSites,
} from "@remotion/lambda";
import dotenv from "dotenv";
import { usedRegions } from "./regions";
dotenv.config();

console.log(`Found account. Deleting...`);

const execute = async () => {
  for (const region of usedRegions) {
    console.log(`Deleting from region ${region}`);

    // Now
    const functions = await getFunctions({
      region,
      compatibleOnly: false,
    });
    for (const fn of functions) {
      const { functionName } = fn;
      await deleteFunction({
        region,
        functionName: fn.functionName,
      });
      console.log(`Deleted function "${functionName}" from ${region}`);
    }

    const { sites } = await getSites({
      region,
    });

    for (const site of sites) {
      await deleteSite({
        bucketName: site.bucketName,
        siteName: site.id,
        region,
      });
      console.log(`Site ${site.id} deleted.`);
    }
  }
};

execute()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
