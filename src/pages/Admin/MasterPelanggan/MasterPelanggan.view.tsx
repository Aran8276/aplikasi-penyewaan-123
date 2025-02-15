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
import Link from "next/link";
import { dummyPelanggan } from "./MasterPelanggan.data";
import DeleteButton from "@/components/DeleteButton/DeleteButton";
import EditButton from "@/components/EditButton";

export async function handleDelete(id: number) {
  "use server";

  // handle delete ke server disini
  console.log(`Hapus: ${id}`);
}

const MasterPelangganView: FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <div>
        <Link href="/admin/pelanggan/tambah">
          <Button className="bg-blue-500 hover:bg-blue-400">
            <Plus className="mr-1" />
            Tambahkan Pelanggan
          </Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Nama Pelanggan</TableHead>
            <TableHead>Alamat Pelanggan</TableHead>
            <TableHead>No Telepon Pelanggan</TableHead>
            <TableHead>Email Pelanggan</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyPelanggan.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>{item.pelangganNama}</TableCell>
              <TableCell className="w-[500px] line-clamp-2">
                {item.pelangganAlamat}
              </TableCell>
              <TableCell>{item.pelangganTelepon}</TableCell>
              <TableCell>{item.pelangganEmail}</TableCell>
              <TableCell className="flex space-x-3">
                <DeleteButton id={index + 1} action={handleDelete} />
                <EditButton href={`/admin/pelanggan/update/${index + 1}`} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>{" "}
    </div>
  );
};

export default memo(MasterPelangganView);
