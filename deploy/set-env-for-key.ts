import dotenv from 'dotenv'

dotenv.config({path: __dirname + "/./../.env"});

export const setEnvForKey = () => {
  process.env.REMOTION_AWS_ACCESS_KEY_ID = process.env[`AWS_KEY_1`];
  process.env.REMOTION_AWS_SECRET_ACCESS_KEY = process.env[`AWS_SECRET_1`];
};
