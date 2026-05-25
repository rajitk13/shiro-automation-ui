import Image from "next/image";

export default function Icon() {
  return (
    <Image
      src="/logo.png"
      alt="Icon"
      width={512}
      height={512}
    />
  );
}
