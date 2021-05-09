import React, { useEffect, useState, createRef, useRef } from "react";
import Annotation from "./Annotation";
import { fetchAudioData } from "../../helpers/query";
import { fetchWaveform, hasConflict } from "../../helpers/waveform";
import { RENDER_FAILED, LOADING_MSG } from "../../helpers/constants";

const Waveform = ({ audioId }: Props) => {
  const { loading, error, data } = fetchAudioData(audioId);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playing, setPlaying] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [resumeTime, setResumeTime] = useState<string>("");

  const wavesurfer = useRef(null);
  const waveContainer = createRef<HTMLDivElement>();
  const waveTimelineContainer = createRef<HTMLDivElement>();

  useEffect(() => {
    if (loading) return;

    wavesurfer.current = fetchWaveform(waveContainer, waveTimelineContainer);
    // @ts-ignore
    wavesurfer.current.load(data.audio.file);
    // @ts-ignore
    wavesurfer.current.on("pause", () => {
      // @ts-ignore
      if (wavesurfer.current.getCurrentTime() === endTime) {
        setPlaying("");
        setResumeTime("");
        setEndTime("");
      }
      setIsPlaying(false);
    });
    setIsLoaded(true);
    // @ts-ignore
    return () => wavesurfer.current.destroy();
  }, [loading]);

  const playPause = (
    startTime: string,
    endTime: string,
    annotationId: string
  ) => {
    if (isPlaying) {
      if (annotationId === playing) {
        // @ts-ignore
        setResumeTime(wavesurfer.current.getCurrentTime());
        // @ts-ignore
        wavesurfer.current.playPause();
        setIsPlaying(false);
      }
    } else {
      if (annotationId === playing)
        // @ts-ignore
        wavesurfer.current.play(resumeTime);
      // @ts-ignore
      else wavesurfer.current.play(startTime);

      // @ts-ignore
      wavesurfer.current.setPlayEnd(endTime);
      setPlaying(annotationId);
      setIsPlaying(true);
    }
  };

  const getAnnotations = () => {
    const { annotations } = data.audio;

    return annotations.map((annotation: AnnotationObject, i: number) => {
      const { startTime, endTime } = annotation;

      return (
        <Annotation
          {...annotation}
          key={String(i)}
          id={Number(i) + 1}
          isPlaying={isPlaying}
          wavesurfer={wavesurfer}
          playing={playing}
          playPause={playPause}
          hasConflict={hasConflict(
            annotations,
            Number(startTime),
            Number(endTime)
          )}
        />
      );
    });
  };

  return (
    <div>
      <div className="flex-col md:ml-auto w-full mt-10 bg-gray-200 rounded-lg p-8 flex">
        {loading && LOADING_MSG}
        {
          <div>
            <div className="w-full" ref={waveContainer}></div>
            <div ref={waveTimelineContainer}></div>
          </div>
        }
        {error && RENDER_FAILED}
      </div>
      {isLoaded && getAnnotations()}
    </div>
  );
};

interface Props {
  audioId: string;
}

interface AnnotationObject {
  startTime: string;
  endTime: string;
}

export default Waveform;
