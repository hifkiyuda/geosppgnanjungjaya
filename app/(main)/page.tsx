import { Container, Section } from "@/components/ds";
import { MapWrapper } from "@/components/map/MapWrapper";
import { Card } from "@/components/ui/card";
import { posyandu } from "@/lib/posyandu";
import { sekolah } from "@/lib/sekolah";
import { Total } from "./_components/Total";
import { Stats } from "./_components/Stats";
import { Sekolah } from "./_components/Sekolah";
import { History } from "./_components/History";
import { Schedule } from "./_components/Schedule";
import { Title } from "./_components/Title";
import { Posyandu } from "./_components/Posyandu";
import { Header } from "@/components/layout/Header";

export interface ResultPosyandu {
  balita: number;
  bumil: number;
  busui: number;
}

export interface ResultSekolah {
  "PAUD/TK/RA": {
    total_pm: number;
  };
  "SD/MI": {
    total_pm: number;
  };
  "SMP/MTS": {
    total_pm: number;
  };
  "SMA/MA": {
    total_pm: number;
  };
}

export default function Home() {
  const resultPosyandu: ResultPosyandu = posyandu.reduce(
    (acc, item) => {
      acc.balita += item.balita;
      acc.bumil += item.bumil;
      acc.busui += item.busui;
      return acc;
    },
    { balita: 0, bumil: 0, busui: 0 },
  );

  const resultSekolah: ResultSekolah = sekolah.reduce(
    (acc, item) => {
      acc[item.category].total_pm += item.total_pm;
      return acc;
    },
    {
      "PAUD/TK/RA": { total_pm: 0 },
      "SD/MI": { total_pm: 0 },
      "SMP/MTS": { total_pm: 0 },
      "SMA/MA": { total_pm: 0 },
    },
  );

  const guru = sekolah.reduce((sum, s) => sum + s.guru, 0);

  return (
    <>
      <Header />
      <Section>
        <Container className="grid gap-6 sm:gap-8">
          {/* Title */}
          <Title />

          {/* Total */}
          <Total
            resultPosyandu={resultPosyandu}
            resultSekolah={resultSekolah}
            totalS={sekolah.length}
            totalP={posyandu.length}
            guru={guru}
          />

          {/* Stats */}
          <Stats
            resultPosyandu={resultPosyandu}
            resultSekolah={resultSekolah}
            guru={guru}
          />

          {/* Map */}
          <Card className="h-[80vh] w-auto py-0 overflow-hidden">
            <MapWrapper />
          </Card>

          {/* Distribution Schedule */}
          <Schedule />

          {/* School */}
          <div className="w-full overflow-x-auto">
            <Sekolah />
          </div>

          {/* Posyandu */}
          <div className="w-full overflow-x-auto">
            <Posyandu />
          </div>

          {/* History */}
          <div className="w-full overflow-x-auto">
            <History />
          </div>
        </Container>
      </Section>
    </>
  );
}
