import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { sekolah } from "@/lib/sekolah";
import { cn } from "@/lib/utils";

const badgeColors: Record<string, string> = {
  "PAUD/TK/RA":
    "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
  "SD/MI": "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
  "SMP/MTS": "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
  "SMA/MA":
    "bg-yellow-50 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-300",
};

export const Sekolah = () => {
  const totalSiswa = sekolah.reduce((sum, item) => sum + item.total_pm, 0);
  const totalGuru = sekolah.reduce((sum, item) => sum + item.guru, 0);
  const totalPk = sekolah.reduce((sum, item) => sum + item.pk, 0);
  const totalPb = sekolah.reduce((sum, item) => sum + item.pb, 0) + totalGuru;
  const totalOrlep = sekolah.reduce((sum) => sum + 1, 0);
  const grandTotal = totalSiswa + totalGuru + totalOrlep;

  return (
    <Card>
      <CardContent>
        <Table>
          <TableCaption>Daftar Sekolah Penerima Manfaat</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Nama Sekolah</TableHead>
              <TableHead>Porsi Kecil (PK)</TableHead>
              <TableHead>Porsi Besar (PB)</TableHead>
              <TableHead>Organoleptik (PB)</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Alamat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sekolah.map((item, index) => (
              <TableRow key={item.name}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">
                  {item.name}
                  <div>
                    <Badge className={cn("mr-1", badgeColors[item.category])}>
                      {item.category}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>{item.pk}</TableCell>
                <TableCell>{item.pb + item.guru}</TableCell>
                <TableCell>1</TableCell>
                <TableCell>{item.total_pm + item.guru + 1}</TableCell>
                <TableCell>{item.alamat}</TableCell>
              </TableRow>
            ))}
            <TableRow className="font-bold">
              <TableCell></TableCell>
              <TableCell>TOTAL</TableCell>
              <TableCell>{totalPk}</TableCell>
              <TableCell>{totalPb}</TableCell>
              <TableCell>{totalOrlep}</TableCell>
              <TableCell>{grandTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
