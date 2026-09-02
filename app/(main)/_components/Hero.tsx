import { Prose } from "@/components/ds";
import { Logo } from "@/components/Logo";
import { Card, CardContent } from "@/components/ui/card";
import { Today } from "@/components/ui/today";

export const Hero = () => {
  return (
    <Card
      className="h-[50vh] bg-cover bg-center relative overflow-hidden border-none"
      style={{
        backgroundImage: "url('/sppg.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/30 to-black/80" />
      <CardContent className="relative h-full flex flex-col justify-end text-white space-y-2">
        <Logo />
        <Prose>
          <Today />
          <h4>
            Geospasial Penerima Manfaat Program Makan Bergizi Gratis (MBG)
          </h4>
          <p className="text-zinc-200 font-light">
            SPPG Garut Kersamanah Nanjungjaya 1 Yayasan Always Be Positive
          </p>
        </Prose>
      </CardContent>
    </Card>
  );
};
