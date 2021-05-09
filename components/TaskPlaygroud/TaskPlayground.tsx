import React from "react";
import Waveform from "./Waveform";
import { AUDIO_ID } from "../../helpers/constants";

const TaskPlayground = () => {
  return <Waveform audioId={AUDIO_ID} />;
};

export default TaskPlayground;
