import { EnvelopeClosedIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { Container } from "../ds";

export const Footer = () => {
  return (
    <footer>
      <Container className="flex items-center justify-between">
        <div>
          <a
            href="https://www.instagram.com/sppgnanjungjaya/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5"
          >
            <InstagramLogoIcon className="h-4 w-4" />{" "}
            <small>sppgnanjungjaya</small>
          </a>
          <a
            href="mailto:sppg.nanjungjaya@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5"
          >
            <EnvelopeClosedIcon className="h-4 w-4" />{" "}
            <small>sppg.nanjungjaya@gmail.com</small>
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <small>Developed by</small>
          <a href="https://hifki.vercel.app">
            <Image
              src={"/hyp.png"}
              alt="Hifki Yuda Pratama"
              width={1000}
              height={0}
              className="w-8 h-auto"
              priority
            />
          </a>
        </div>
      </Container>
    </footer>
  );
};
