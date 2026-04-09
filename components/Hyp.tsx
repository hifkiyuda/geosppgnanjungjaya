"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Hyp = () => {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <Image
      src={resolvedTheme === "dark" ? "/hyp-wht.png" : "/hyp-blk.png"}
      alt="Hifki Yuda Pratama"
      width={1000}
      height={0}
      className="w-8 h-auto"
      priority
    />
  ) : null;
};
