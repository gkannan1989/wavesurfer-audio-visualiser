import * as React from "react";
import TaskBase from "./taskBase";

const Task2 = () => {
  return (
    <TaskBase
      title="Task 2: Display the audio in with Wavesurfer"
      resources={[
        {
          name: "Wavesurfer",
          value: "https://wavesurfer-js.org/examples/"
        }
      ]}
      goal="Display the waveform of the 'papercup' audio with wavesurfer"
    >
      The wavesurfer library provides an easy way to visualize the audio as a
      waveform. Utilise the library to create a waveform of the audio file.
    </TaskBase>
  );
};

export default Task2;
