import * as React from "react";
import TaskBase from "./taskBase";

const Task5 = () => {
  return (
    <TaskBase
      title="Task 5: Display annotations"
      image="/assets/waveform_play.gif"
      resources={[
        {
          name: "Wavesurfer Region Docs",
          value:
            "https://wavesurfer-js.org/api/class/src/plugin/regions/index.js~RegionsPlugin.html",
          link:
            "https://wavesurfer-js.org/api/class/src/plugin/regions/index.js~RegionsPlugin.html"
        }
      ]}
      goal="Add ability to play each annotation and display each annoation"
    >
      We would also like to display our annotations below the waveform, and be
      able to play each annotation. The design of the each container is up to
      you, you can find assets for play and pause buttons in the{" "}
      <code className="bg-orange-200">/components/assets/svg</code> folder. All
      the nessary libraries are installed for you to be able to import SVGs (see
      Header.tsx for an example)
    </TaskBase>
  );
};

export default Task5;
