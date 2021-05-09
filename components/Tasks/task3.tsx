import * as React from "react";
import TaskBase from "./taskBase";

const Task3 = () => {
  return (
    <TaskBase
      title="Task 3: Style the WaveForm"
      image="/assets/waveform_style.gif"
      resources={[
        {
          name: "Wavesurfer",
          value: "https://wavesurfer-js.org/examples/",
          link: "https://wavesurfer-js.org/examples/"
        },
        {
          name: "Colours",
          value: "Primary rgb(252, 78, 54), Secondary rgb(200, 58, 34)"
        }
      ]}
      goal="Make the waveform look sleak"
    >
      Using the Wavesurfer library&apos;s API and{" "}
      <span className="font-bold">Timeline plugin </span> style the waveform as
      shown below, or you can get even more creative.
    </TaskBase>
  );
};

export default Task3;
