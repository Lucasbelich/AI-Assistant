import Transcription from "@/components/Transcription";
import { generateMockTranscriptionData } from "@/utils/mockData";

const audioSrc = `/Test Call.wav`;

export default function Home() {
  const transcriptionData = generateMockTranscriptionData();

  return (
    <main className="container flex flex-col items-center mx-auto p-4">
      <h1 className="text-2xl pl-20 self-start font-bold mb-4">AI Assistant</h1>
      <Transcription transcription={transcriptionData} audioSrc={audioSrc} />
    </main>
  );
}
