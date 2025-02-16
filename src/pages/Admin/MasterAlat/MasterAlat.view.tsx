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
    <section className="space-y-8 w-screen my-8 px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">Manajemen Alat</h2>
        <Link href="/admin/alat/tambah">
          <Button className="bg-blue-500 hover:bg-blue-400">
            <Plus className="mr-2 h-4 w-4" />
            Tambahkan Alat
          </Button>
        </Link>
      </div>
      <div className="rounded-md border">
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
                <TableCell className="max-w-[300px] truncate">
                  {item.alatDeskripsi}
                </TableCell>
                <TableCell>
                  Rp{item.alatHargaPerHari.toLocaleString()}
                </TableCell>
                <TableCell>{item.alatStok}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <DeleteButton id={index + 1} action={handleDelete} />
                    <EditButton href={`/admin/alat/update/${index + 1}`} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default memo(MasterAlatView);
