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

export const TableItem = () => {
  const totalSiswa = sekolah.reduce((sum, item) => sum + item.total_pm, 0);

  const totalGuru = sekolah.reduce((sum, item) => sum + item.total_guru, 0);

  const grandTotal = totalSiswa + totalGuru;

  return (
    <Card>
      <CardContent>
        <Table>
          <TableCaption>
            Daftar Sekolah Penerima Manfaat untuk Minggu 1.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Nama Sekolah</TableHead>
              <TableHead>Alamat</TableHead>
              <TableHead className="text-right">Jumlah Siswa</TableHead>
              <TableHead className="text-right">Jumlah Guru</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sekolah.map((item, index) => (
              <TableRow key={item.name}>
                <TableCell>{index + 1}</TableCell>

                <TableCell className="font-medium">
                  {item.name}
                  <div className="text-xs text-muted-foreground">
                    {item.category}
                  </div>
                </TableCell>

                <TableCell>{item.alamat}</TableCell>

                <TableCell className="text-right">{item.total_pm}</TableCell>

                <TableCell className="text-right">{item.total_guru}</TableCell>

                <TableCell className="text-right font-semibold">
                  {item.total_pm + item.total_guru}
                </TableCell>
              </TableRow>
            ))}
            <TableRow className="bg-muted/50 font-bold">
              <TableCell colSpan={3}>TOTAL</TableCell>

              <TableCell className="text-right">{totalSiswa}</TableCell>

              <TableCell className="text-right">{totalGuru}</TableCell>

              <TableCell className="text-right">{grandTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
