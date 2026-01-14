import { Prose } from "@/components/ds";
import { Card, CardContent } from "@/components/ui/card";

export const Schedule = () => {
  return (
    <Card>
      <CardContent className="space-y-4">
        <Prose>
          <h5>Alur Distribusi</h5>
        </Prose>
        <Prose>
          <h6>Kloter 1:</h6>
          <p className="text-muted-foreground">{`SDN 2 Nanjungjaya & SDN 4 Nanjungjaya`}</p>
        </Prose>
        <Prose>
          <h6>Kloter 2:</h6>
          <p className="text-muted-foreground">{`MIS Muhammadiyah & SMP IT Darul Abror`}</p>
        </Prose>
        <Prose>
          <h6>Kloter 3:</h6>
          <p className="text-muted-foreground">{`SDN 3 Nanjungjaya, MIS Galmasi, MTS Galmasi, & SMA Galmasi`}</p>
        </Prose>
        <Prose>
          <h6>Kloter 4:</h6>
          <p className="text-muted-foreground">{`SDN 1 Nanjungjaya & MIS Assibyan`}</p>
        </Prose>
      </CardContent>
    </Card>
  );
};
