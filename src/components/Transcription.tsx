"use client";
import React, { useState, useRef } from "react";
import AvatarIA from "./AvatarIA";
import Player from "./Player";
import { Message } from "@/utils/mockData";

interface Props {
  transcription: Message[];
  audioSrc: string;
}

const Transcription: React.FC<Props> = ({ transcription, audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const handleSeek = (startTime: number, endTime: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = startTime;
      if (!playing) {
        audioRef.current.play();
        setPlaying(true);
      }

      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.pause();
          setPlaying(false);
        }
      }, (endTime - startTime) * 1000);
    }
  };

  return (
    <div className="flex lg:w-2/4 flex-col space-y-2">
      <div className="flex  flex-col p-4  space-y-2">
        {transcription.map((message, index) => (
          <div
            key={index}
            className={`flex flex-col  ${
              message.role === "agent" ? "items-start" : "items-end "
            }`}
          >
            <div
              className={`w-4/5 max-w-lg text-white rounded-md ${
                message.role === "agent"
                  ? "  rounded-r-[70px] rounded-bl-[20px] py-4 "
                  : "bg-[#4e2888] rounded-l-[70px] text-right rounded-br-[20px] p-6 "
              }`}
            >
              <div
                className={`${
                  message.role === "agent" ? "flex gap-2" : "right-0 "
                }`}
              >
                {message.role === "agent" && <AvatarIA />}

                <p
                  className="cursor-pointer"
                  onClick={() => handleSeek(message.start, message.end)}
                >
                  {message.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
        <Player audioRef={audioRef} audioSrc={audioSrc} />
    </div>
  );
};

export default Transcription;
