import Image from "next/image";
import { Container } from "../ds";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <Container>
        <div className="flex items-center gap-4">
          <Image
            src={"/logo_yayasan.png"}
            alt="Yayasan Always Be Positive"
            width={1000}
            height={1000}
            className="h-14 w-auto"
            priority
          />
          <Image
            src={"/logo_bgn.png"}
            alt="Badan Gizi Nasional"
            width={1000}
            height={1000}
            className="h-12 w-auto"
            priority
          />
        </div>
      </Container>
    </header>
  );
};
