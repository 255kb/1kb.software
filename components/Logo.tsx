import Image from "next/image";
import type { HTMLAttributes } from "react";

export default function Logo({ className }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className}>
      <Image
        src="/images/logo-square.svg"
        alt="1kB"
        width={128}
        height={128}
        className="block h-full w-auto max-w-full object-contain"
      />
    </div>
  );
}
