import { Prose } from "@/components/ds";
import { Today } from "@/components/ui/today";

export const Title = () => {
  return (
    <Prose>
      <Today />
      <h4>Geospasial Penerima Manfaat Program Makan Bergizi Gratis (MBG)</h4>
      <h6 className="text-muted-foreground">
        Satuan Pelayanan Pemenuhan Gizi (SPPG) Garut Kersamanah Nanjungjaya 1 -
        Yayasan Always Be Positive
      </h6>
    </Prose>
  );
};
