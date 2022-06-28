import crypto from "crypto";

export const secondsToTime = (elapsed) => {
  const minutes = Math.floor(elapsed / 60);
  const seconds = Math.floor(elapsed % 60);

  return `${minutes < 9 ? "0" + minutes : minutes}:${
    seconds < 9 ? "0" + seconds : seconds
  }`;
};

export const getHash = (input) => {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify(input))
    .digest("hex");
};
