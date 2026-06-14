import { Prose } from "@/components/ds";
import { Card, CardContent } from "@/components/ui/card";
import { sekolah } from "@/lib/sekolah";
import { posyandu } from "@/lib/posyandu";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const badgeColors: Record<string, string> = {
  "PAUD/TK/RA":
    "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  "SD/MI": "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
  "SMP/MTS": "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  "SMA/MA":
    "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300",
};

const categoryOrder = {
  "PAUD/TK/RA": 1,
  "SD/MI": 2,
  "SMP/MTS": 3,
  "SMA/MA": 4,
};

export const Schedule = () => {
  const rute1Skl = sekolah.filter((skl) => skl.rute === "1");
  const rute2Skl = sekolah.filter((skl) => skl.rute === "2");
  const rute1Pyd = posyandu.filter((pyd) => pyd.rute === "1");
  const rute2Pyd = posyandu.filter((pyd) => pyd.rute === "2");

  const sortedRute1Skl = [...rute1Skl].sort(
    (a, b) =>
      (categoryOrder[a.category] ?? 999) - (categoryOrder[b.category] ?? 999),
  );
  const sortedRute2Skl = [...rute2Skl].sort(
    (a, b) =>
      (categoryOrder[a.category] ?? 999) - (categoryOrder[b.category] ?? 999),
  );

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
              {sortedRute1Skl.map((r, i) => {
                const total = r.pk + r.pb + r.guru;
                return (
                  <li key={i} className="text-sm">
                    <Badge className={cn("mr-1", badgeColors[r.category])}>
                      {r.category}
                    </Badge>
                    {`${r.name} `}
                    <span className="font-semibold">({total})</span>
                  </li>
                );
              })}

              {rute1Pyd.map((r, i) => {
                const total = r.balita + r.bumil + r.busui;
                return (
                  <li key={i} className="text-sm">
                    <Badge className="mr-2 bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                      POSYANDU
                    </Badge>
                    {`${r.name} `}
                    <span className="font-semibold">({total})</span>
                  </li>
                );
              })}
            </ol>
          </Prose>
          <Prose>
            <p>
              {`Rute 2: ${
                rute2Skl.reduce((sum, r) => sum + r.pk + r.pb + r.guru, 0) +
                rute2Pyd.reduce(
                  (sum, r) => sum + r.balita + r.bumil + r.busui,
                  0,
                )
              } Paket`}
            </p>
            <ol>
              {sortedRute2Skl.map((r, i) => {
                const total = r.pk + r.pb + r.guru;
                return (
                  <li key={i} className="text-sm">
                    <Badge className={cn("mr-1", badgeColors[r.category])}>
                      {r.category}
                    </Badge>
                    {`${r.name} `}
                    <span className="font-semibold">({total})</span>
                  </li>
                );
              })}

              {rute2Pyd.map((r, i) => {
                const total = r.balita + r.bumil + r.busui;
                return (
                  <li key={i} className="text-sm">
                    <Badge className="mr-2 bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                      POSYANDU
                    </Badge>
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
