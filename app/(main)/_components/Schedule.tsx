import { Prose } from "@/components/ds";
import { Card, CardContent } from "@/components/ui/card";
import { sekolah } from "@/lib/sekolah";

export const Schedule = () => {
  const rute1 = sekolah.filter((skl) => skl.rute === "1");
  const rute2 = sekolah.filter((skl) => skl.rute === "2");

  return (
    <Card>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">Rute distribusi paket MBG:</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <Prose>
            <p>{`Rute 1: ${rute1.reduce(
              (sum, r) => sum + r.pk + r.pb + r.guru,
              0,
            )} Paket`}</p>
            <ol>
              {rute1.map((r, i) => {
                const total = r.pk + r.pb + r.guru;
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
            <p>{`Rute 2: ${rute2.reduce(
              (sum, r) => sum + r.pk + r.pb + r.guru,
              0,
            )} Paket`}</p>
            <ol>
              {rute2.map((r, i) => {
                const total = r.pk + r.pb + r.guru;
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
