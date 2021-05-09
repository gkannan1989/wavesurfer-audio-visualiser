import React from "react";
import { WAVE_COLOR, PROGRESS_COLOR, SECONDARY_COLOR } from "../helpers/constants";

export const fetchWaveform = (
  waveContainer: React.RefObject<HTMLDivElement>,
  waveTimelineContainer: React.RefObject<HTMLDivElement>
) => {
  const WaveSurfer = require("wavesurfer.js");
  const Timeline = require("wavesurfer.js/dist/plugin/wavesurfer.timeline.min");
  const Regions = require("wavesurfer.js/dist/plugin/wavesurfer.regions.min");

  const wavesurfer = WaveSurfer.create({
    container: waveContainer.current,
    waveColor: WAVE_COLOR,
    progressColor: PROGRESS_COLOR,
    primaryColor:  WAVE_COLOR,
    secondaryColor: SECONDARY_COLOR,
    primaryFontColor: WAVE_COLOR,
    secondaryFontColor: SECONDARY_COLOR,
    barWidth: 1,
    barHeight: 1,
    plugins: [
      Timeline.create({
        container: waveTimelineContainer.current,
        primaryColor:  WAVE_COLOR,
        secondaryColor: SECONDARY_COLOR,
        primaryFontColor: WAVE_COLOR,
        secondaryFontColor: SECONDARY_COLOR,
      }),
      Regions.create()
    ]
  });

  return wavesurfer;
};

export const hasConflict = (
  annotations: Array<Annotation>,
  startTime: number,
  endTime: number
) => {
  for (const annotation in annotations) {
    const checkStart = Number(annotations[annotation].startTime);
    const checkEnd = Number(annotations[annotation].endTime);

    if (
      (checkStart < startTime && startTime < checkEnd) ||
      (startTime < checkEnd && endTime > checkEnd) ||
      (startTime < checkStart && endTime > checkStart) ||
      (checkStart < endTime && checkEnd > endTime)
    ) {
      return true;
    }
  }

  return false;
};

interface Annotation {
  startTime: string;
  endTime: string;
}
