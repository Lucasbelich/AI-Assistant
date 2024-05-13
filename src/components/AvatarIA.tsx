import Image from "next/image";

function AvatarIA() {
  return (
    <Image
      className="p-2 rounded-full border-white border-2 w-14 h-14"
      src="/avatar-ai.png"
      alt="Agent Avatar"
      width={128}
      height={128}
    />
  );
}

export default AvatarIA;
