import React, { FC, memo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { dummyAlat } from "@/pages/Alat/Alat.data";
import DeleteButton from "@/components/DeleteButton/DeleteButton";
import EditButton from "@/components/EditButton";
import Link from "next/link";

export async function handleDelete(id: number) {
  "use server";

  // handle delete ke server disini
  console.log(`Hapus: ${id}`);
}

const MasterAlatView: FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <Link href="/admin/alat/tambah">
          <Button className="bg-blue-500 hover:bg-blue-400">
            <Plus className="mr-1" />
            Tambahkan Alat
          </Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Nama Alat</TableHead>
            <TableHead>Deskripsi Alat</TableHead>
            <TableHead>Harga Alat Perhari</TableHead>
            <TableHead>Stok Alat</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyAlat.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{item.alatNama}</TableCell>
              <TableCell className="w-[500px] line-clamp-2">
                {item.alatDeskripsi}
              </TableCell>
              <TableCell>Rp{item.alatHargaPerHari.toLocaleString()}</TableCell>
              <TableCell>{item.alatStok}</TableCell>
              <TableCell className="flex space-x-3">
                <DeleteButton id={index + 1} action={handleDelete} />
                <EditButton href={`/admin/alat/update/${index + 1}`} />
              </TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>{" "}
    </div>
  );
};

export default memo(MasterAlatView);
