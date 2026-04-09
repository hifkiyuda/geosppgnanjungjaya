import { Prose } from "@/components/ds";
import { Card, CardContent } from "@/components/ui/card";
import { sekolah } from "@/lib/sekolah";
import { posyandu } from "@/lib/posyandu";

export const Schedule = () => {
  const rute1Skl = sekolah.filter((skl) => skl.rute === "1");
  const rute2Skl = sekolah.filter((skl) => skl.rute === "2");
  const rute1Pyd = posyandu.filter((pyd) => pyd.rute === "1");
  const rute2Pyd = posyandu.filter((pyd) => pyd.rute === "2");

  return (
    <Card>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">Rute distribusi paket MBG</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Prose>
            <p>
              {`Rute 1: ${
                rute1Skl.reduce((sum, r) => sum + r.pk + r.pb + r.guru, 0) +
                rute1Pyd.reduce(
                  (sum, r) => sum + r.balita + r.bumil + r.busui,
                  0,
                )
              } Paket`}
            </p>
            <ol>
              {rute1Skl.map((r, i) => {
                const total = r.pk + r.pb + r.guru;
                return (
                  <li key={i} className="text-zinc-800 text-sm">
                    {`${r.name} `}
                    <span className="font-semibold">({total})</span>
                  </li>
                );
              })}

              {rute1Pyd.map((r, i) => {
                const total = r.balita + r.bumil + r.busui;
                return (
                  <li key={i} className="text-zinc-800 text-sm">
                    {`${r.name} `}
                    <span className="font-semibold">({total})</span>
                  </li>
                );
              })}
            </ol>
          </Prose>
          <Prose>
            <p>
              {`Rute 1: ${
                rute2Skl.reduce((sum, r) => sum + r.pk + r.pb + r.guru, 0) +
                rute2Pyd.reduce(
                  (sum, r) => sum + r.balita + r.bumil + r.busui,
                  0,
                )
              } Paket`}
            </p>
            <ol>
              {rute2Skl.map((r, i) => {
                const total = r.pk + r.pb + r.guru;
                return (
                  <li key={i} className="text-zinc-800 text-sm">
                    {`${r.name} `}
                    <span className="font-semibold">({total})</span>
                  </li>
                );
              })}

              {rute2Pyd.map((r, i) => {
                const total = r.balita + r.bumil + r.busui;
                return (
                  <li key={i} className="text-zinc-800 text-sm">
                    {`${r.name} `}
                    <span className="font-semibold">({total})</span>
                  </li>
                );
              })}
            </ol>
          </Prose>
        </div>
      </CardContent>
    </Card>
  );
};
