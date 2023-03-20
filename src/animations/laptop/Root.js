import { Composition } from "remotion";
import Laptop from "./Laptop";

const Root = () => {
  return (
    <Composition
      component={Laptop}
      durationInFrames={300}
      fps={30}
      width={1516}
      height={800}
      id="laptop"
    />
  );
};

export default Root;
