import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={"/bgn.png"}
        alt="Badan Gizi Nasional"
        width={1000}
        height={1000}
        className="h-16 w-auto"
        priority
      />
      <Image
        src={"/logo_yayasan.png"}
        alt="Yayasan Always Be Positive"
        width={1000}
        height={1000}
        className="h-14 w-auto bg-white rounded-full"
        priority
      />
    </div>
  );
};
