import { Container, Prose } from "@/components/ds";
import { InstagramLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer>
      <Container className="flex items-center justify-between">
        <a
          href="https://www.instagram.com/sppgnanjungjaya/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5"
        >
          <InstagramLogoIcon className="h-5 w-5" />{" "}
          <small>sppgnanjungjaya</small>
        </a>
        <div className="flex items-center space-x-2">
          <small>Developed by</small>
          <a href="https://hifki.vercel.app">
            <Image
              src={"/hyp.png"}
              alt="Hifki Yuda Pratama"
              width={1000}
              height={0}
              className="w-10 h-auto"
              priority
            />
          </a>
        </div>
      </Container>
    </footer>
  );
};
