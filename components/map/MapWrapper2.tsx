"use client";

import dynamic from "next/dynamic";
import { Maximize2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MapGeo2 = dynamic(() => import("@/components/map/MapGeo2"), {
  ssr: false,
});

export const MapWrapper2 = () => {
  const pathname = usePathname();

  return (
    <div className="h-full w-full relative">
      <MapGeo2 />
      <div className="absolute top-0 right-0 z-20 p-2 sm:p-4 w-fit">
        <Link href="">
          <Button className="cursor-pointer bg-white hover:bg-white dark:hover:bg-white text-black">
            <Maximize2 />
          </Button>
        </Link>
      </div>
    </div>
  );
};
