import { Prose } from "@/components/ds";
import { Card, CardContent } from "@/components/ui/card";

const mobil1 = [
  {
    name: "PAUD DARUL ILMI",
    total: 23,
  },
  {
    name: "SDN 4 NANJUNGJAYA",
    total: 104,
  },
  {
    name: "RA AS SAADAH",
    total: 41,
  },
  // {
  //   name: "TK AISIYAH",
  //   total: 22,
  // },
  {
    name: "MIS MUHAMMADIYAH",
    total: 87,
  },
  {
    name: "SMP IT DARUL ABROR",
    total: 237,
  },
  {
    name: "TK ASSAJIDIN",
    total: 26,
  },
  {
    name: "RA AL-FALAH CIPATIK",
    total: 15,
  },
  {
    name: "PAUD KB AL-ANSHORIYAH",
    total: 34,
  },
  {
    name: "SDN 3 NANJUNGJAYA",
    total: 144,
  },
  {
    name: "PAUD KB AT TAQWA",
    total: 30,
  },
];

const mobil2 = [
  {
    name: "SDN 2 NANJUNGJAYA",
    total: 205,
  },
  {
    name: "PAUD KB SEJAHTERA",
    total: 18,
  },
  {
    name: "PAUD KB NURUDHDHOLAM",
    total: 39,
  },
  {
    name: "RA AL-FALAH CIORAY HILIR",
    total: 15,
  },
  {
    name: "MIS ASSIBYAN",
    total: 127,
  },
  {
    name: "RA/BA/TA ASSIBYAN",
    total: 48,
  },
  {
    name: "SDN 1 NANJUNGJAYA",
    total: 146,
  },
  {
    name: "RA ASSALAM KERSAMANAH",
    total: 30,
  },
  {
    name: "MIS YPI PST GALMASI",
    total: 62,
  },
  {
    name: "MTSS YPI GALMASI",
    total: 27,
  },
  {
    name: "SMA ISLAM PESANTREN GALMASI",
    total: 75,
  },
];

export const Schedule = () => {
  return (
    <Card>
      <CardContent className="space-y-4">
        <Prose>
          <h6>Alur Distribusi Paket MBG</h6>
        </Prose>
        <div className="grid sm:grid-cols-2 gap-4">
          <Prose>
            <p className="font-semibold">{`Mobil 1: ${mobil1.reduce(
              (sum, m) => sum + m.total,
              0
            )} Paket`}</p>
            <ol>
              {mobil1.map((m, i) => (
                <li key={i} className="text-zinc-800 text-sm">
                  {`${m.name} `}
                  <span className="font-bold">({m.total})</span>
                </li>
              ))}
            </ol>
          </Prose>
          <Prose>
            <p className="font-semibold">{`Mobil 2: ${mobil2.reduce(
              (sum, m) => sum + m.total,
              0
            )} Paket`}</p>
            <ol>
              {mobil2.map((m, i) => (
                <li key={i} className="text-zinc-800 text-sm">
                  {`${m.name} `}
                  <span className="font-bold">({m.total})</span>
                </li>
              ))}
            </ol>
          </Prose>
        </div>
      </CardContent>
    </Card>
  );
};
