interface Props {
  audioRef: React.RefObject<HTMLAudioElement>;
  audioSrc: string;
}

function Player({ audioRef, audioSrc }: Props) {
  return (
    <div className="flex justify-center items-center">
      <audio ref={audioRef} src={audioSrc} controls />
    </div>
  );
}

export default Player;
