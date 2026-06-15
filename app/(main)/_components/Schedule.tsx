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
import { schedule } from "@/lib/schedule";

export const Schedule = () => {
  return (
    <Card>
      <CardContent className="grid gap-4 sm:gap-6">
        <Table>
          <TableCaption>Jadwal Masuk Sekolah</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No</TableHead>
              <TableHead>Nama Sekolah</TableHead>
              <TableHead>Senin</TableHead>
              <TableHead>Selasa</TableHead>
              <TableHead>Rabu</TableHead>
              <TableHead>Kamis</TableHead>
              <TableHead>Jumat</TableHead>
              <TableHead>Sabtu</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schedule.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>

                <TableCell
                  className={
                    item.mon.toLowerCase() === "masuk"
                      ? "bg-green-700 text-green-100"
                      : "bg-red-700 text-red-100"
                  }
                >
                  {item.mon}
                </TableCell>
                <TableCell
                  className={
                    item.tue.toLowerCase() === "masuk"
                      ? "bg-green-700 text-green-100"
                      : "bg-red-700 text-red-100"
                  }
                >
                  {item.tue}
                </TableCell>
                <TableCell
                  className={
                    item.wed.toLowerCase() === "masuk"
                      ? "bg-green-700 text-green-100"
                      : "bg-red-700 text-red-100"
                  }
                >
                  {item.wed}
                </TableCell>
                <TableCell
                  className={
                    item.thu.toLowerCase() === "masuk"
                      ? "bg-green-700 text-green-100"
                      : "bg-red-700 text-red-100"
                  }
                >
                  {item.thu}
                </TableCell>
                <TableCell
                  className={
                    item.fri.toLowerCase() === "masuk"
                      ? "bg-green-700 text-green-100"
                      : "bg-red-700 text-red-100"
                  }
                >
                  {item.fri}
                </TableCell>
                <TableCell
                  className={
                    item.sat.toLowerCase() === "masuk"
                      ? "bg-green-700 text-green-100"
                      : "bg-red-700 text-red-100"
                  }
                >
                  {item.sat}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
