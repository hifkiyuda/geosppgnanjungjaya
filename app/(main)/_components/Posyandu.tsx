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
import { posyandu } from "@/lib/posyandu";

export const Posyandu = () => {
  const totalBalita = posyandu.reduce((sum, item) => sum + item.balita, 0);
  const totalBumil = posyandu.reduce((sum, item) => sum + item.bumil, 0);
  const totalBusui = posyandu.reduce((sum, item) => sum + item.busui, 0);
  const grandTotal = totalBalita + totalBumil + totalBusui;

  return (
    <Card>
      <CardContent>
        <Table>
          <TableCaption>Daftar Posyandu Penerima Manfaat</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Nama Posyandu</TableHead>
              <TableHead>Balita (PK)</TableHead>
              <TableHead>Ibu Hamil (PB)</TableHead>
              <TableHead>Ibu Menyusui (PB)</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Alamat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posyandu.map((item, index) => (
              <TableRow key={item.name}>
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">
                  {item.name}
                  <div>
                    <Badge className="mr-2 bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300">
                      POSYANDU
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>{item.balita}</TableCell>
                <TableCell>{item.bumil}</TableCell>
                <TableCell>{item.busui}</TableCell>
                <TableCell>{item.balita + item.bumil + item.busui}</TableCell>
                <TableCell>{item.alamat}</TableCell>
              </TableRow>
            ))}
            <TableRow className="font-bold">
              <TableCell></TableCell>
              <TableCell>TOTAL</TableCell>
              <TableCell>{totalBalita}</TableCell>
              <TableCell>{totalBumil}</TableCell>
              <TableCell>{totalBusui}</TableCell>
              <TableCell>{grandTotal}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
