import { Container, Prose, Section } from "@/components/ds";
import { MapWrapper } from "@/components/map/MapWrapper";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { posyandu } from "@/lib/posyandu";
import { sekolah } from "@/lib/sekolah";
import { Total } from "./_components/Total";
import { Stats } from "./_components/Stats";
import { TableItem } from "./_components/TableItem";

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
      acc.balita += item.total_pm.balita;
      acc.bumil += item.total_pm.bumil;
      acc.busui += item.total_pm.busui;
      return acc;
    },
    { balita: 0, bumil: 0, busui: 0 }
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
    }
  );

  const guru = sekolah.reduce((sum, s) => sum + s.total_guru, 0);

  return (
    <Section>
      <Container className="grid gap-6 sm:gap-8">
        <Image
          src={"/logo_bgn.png"}
          alt="Logo BGN"
          width={1762}
          height={742}
          className="w-30 h-auto"
          priority
        />
        <Prose>
          <p className="text-red-500">Update: Rabu, 14 Januari 2026</p>
          <h4>
            Geospasial Penerima Manfaat Program Makan Bergizi Gratis (MBG)
          </h4>
          <h6 className="text-muted-foreground">
            SPPG Garut Kersamanah Nanjungjaya Yayasan Always Be Positive
          </h6>
        </Prose>
        <Total
          resultPosyandu={resultPosyandu}
          resultSekolah={resultSekolah}
          totalS={sekolah.length}
          totalP={posyandu.length}
          guru={guru}
        />
        <Stats
          resultPosyandu={resultPosyandu}
          resultSekolah={resultSekolah}
          guru={guru}
        />
        <Card className="h-[80vh] w-auto py-0 overflow-hidden">
          <MapWrapper />
        </Card>
        {/* <div className="w-full overflow-x-auto">
          <TableItem />
        </div> */}
        <Card>
          <CardContent className="space-y-4">
            <Prose>
              <h5>Alur Distribusi</h5>
            </Prose>
            <Prose>
              <h6>Kloter 1: 642 Porsi</h6>
              <p className="text-muted-foreground">{`SDN 2 Nanjungjaya (25) → MIS Assibyan (127) → SDN 1 Nanjungjaya (146) → MIS YPI PST Galmasi (62) → MTSS YPI Galmasi (27) → SMA Islam Galmasi (75)`}</p>
            </Prose>
            <Prose>
              <h6>Kloter 2: 572 Porsi</h6>
              <p className="text-muted-foreground">{`SDN 4 Nanjungjaya (104) → MIS Muhammadiyah (87) → SMP IT Darul Abror (157) → SDN 3 Nanjungjaya (144) → Al - Muawannah/Darul Abror (80)`}</p>
            </Prose>
          </CardContent>
        </Card>
        <div>
          <TableItem />
        </div>
      </Container>
    </Section>
  );
}
