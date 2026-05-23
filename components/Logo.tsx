"use client";

import Image from "next/image";

export function Logo({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/shinchan.gif"
      alt="Shiro Automation Logo"
      width={size}
      height={size}
      className="rounded-lg"
      unoptimized
    />
  );
}
