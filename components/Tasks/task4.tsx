import * as React from "react";
import TaskBase from "./taskBase";

const Task4 = () => {
  return (
    <TaskBase
      title="Task 4: Add annotations to the timeline"
      image="/assets/waveform_annotations.png"
      resources={[
        {
          name: "Wavesurfer Region Docs",
          value:
            "https://wavesurfer-js.org/api/class/src/plugin/regions/index.js~RegionsPlugin.html",
          link:
            "https://wavesurfer-js.org/api/class/src/plugin/regions/index.js~RegionsPlugin.html"
        }
      ]}
      goal="Add annotations on top of the waveform"
    >
      The GraphQL library returns annotations as part of the audio object,
      visualise the annotation on the waveform by using the API provided by
      Wavesurfer.
    </TaskBase>
  );
};

export default Task4;
