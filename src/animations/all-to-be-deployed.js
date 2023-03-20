import { Composition } from "remotion";
import { templates } from "./templates";

const ToBeDeployed = () =>
  templates.map(
    ({
      id,
      durationInFrames,
      fps,
      template,
      defaultProps,
      height,
      width,
    }) => <Composition 
      id={id}
      durationInFrames={durationInFrames}
      fps={fps}
      height={height}
      width={width}
      component={template}
      defaultProps={defaultProps}
    />
  );

export default ToBeDeployed;
