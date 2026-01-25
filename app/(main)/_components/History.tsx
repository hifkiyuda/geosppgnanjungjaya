import { Prose } from "@/components/ds";
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
import { history } from "@/lib/history";

export const History = () => {
  return (
    <Card>
      <CardContent className="space-y-4">
        <Table>
          <TableCaption>Riwayat Jumlah Penerima Manfaat.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Tanggal</TableHead>
              <TableHead>Senin</TableHead>
              <TableHead>Selasa</TableHead>
              <TableHead>Rabu</TableHead>
              <TableHead>Kamis</TableHead>
              <TableHead>Jumat</TableHead>
              <TableHead>Sabtu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {history.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.week}</TableCell>
                <TableCell>{item.mon}</TableCell>
                <TableCell>{item.tue}</TableCell>
                <TableCell>{item.wed}</TableCell>
                <TableCell>{item.thu}</TableCell>
                <TableCell>{item.fri}</TableCell>
                <TableCell>{item.sat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
