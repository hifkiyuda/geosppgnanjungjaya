"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient ? (
    <div className="flex items-center gap-2">
      <Image
        src={"/bgn.png"}
        alt="Badan Gizi Nasional"
        width={1000}
        height={1000}
        className="h-16 w-full"
        priority
      />
      <Image
        src={"/logo_yayasan.png"}
        alt="Yayasan Always Be Positive"
        width={1000}
        height={1000}
        className={`${resolvedTheme === "dark" ? "h-14" : "h-16"} w-auto dark:bg-white rounded-full`}
        priority
      />
    </div>
  ) : null;
};
