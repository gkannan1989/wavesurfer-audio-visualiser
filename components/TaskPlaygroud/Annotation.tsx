import React, { useEffect, useState } from "react";
import { OVERLAPPING_MSG } from "../../helpers/constants";
import PLAY from "../assets/svg/play.svg";
import PAUSE from "../assets/svg/pause.svg";

export const region = (
  wavesurfer: React.RefObject<Record<string, any>>,
  startTime: string,
  endTime: string
) => {
  // @ts-ignore:
  const regionData = wavesurfer.current.addRegion({
    drag: false,
    resize: false,
    color: "rgba(0, 0, 0, 0.1)",
    start: startTime,
    end: endTime
  });

  return regionData.id;
};

const Annotation = ({
  id,
  wavesurfer,
  playing,
  playPause,
  isPlaying,
  hasConflict,
  startTime,
  endTime
}: Props) => {
  const [annotationId, setAnnotationId] = useState(null);

  useEffect(() => {
    setAnnotationId(region(wavesurfer, startTime, endTime));
  }, []);

  const handleClick = () => {
    playPause(startTime, endTime, annotationId);
  };

  return (
    <div className="flex flex-row container hover:bg-gray-400 rounded-lg bg-gray-200 my-1 py-4 px-6">
      <div className="flex flex-row justify-start items-center w-56 text-xs">
        <span className="mr-3">Annotation {id}</span>
        {isPlaying && annotationId === playing ? (
          <PAUSE className="w-3 h-3 mr-3" onClick={handleClick} />
        ) : (
          <PLAY className="w-3 h-3 mr-3" onClick={handleClick} />
        )}
        <span>
          {startTime} - {endTime}
        </span>
      </div>
      <div className="text-red-600 font-bold text-sm float-right">
        <span className="text-md">{hasConflict && OVERLAPPING_MSG}</span>
      </div>
    </div>
  );
};

interface Props {
  id: number;
  wavesurfer: React.RefObject<Record<string, any>>;
  isPlaying: boolean;
  hasConflict: boolean;
  startTime: string;
  endTime: string;
  playing: string;
  playPause: Function;
}

export default Annotation;
