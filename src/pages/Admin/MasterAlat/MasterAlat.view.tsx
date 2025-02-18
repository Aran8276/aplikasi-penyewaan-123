"use client";

import React, { FC, memo, useState } from "react";
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
import DeleteButton from "@/components/DeleteButton/DeleteButton";
import EditButton from "@/components/EditButton";
import Link from "next/link";
import { MasterAlatProps } from "./MasterAlat.type";
import { useRouter } from "next/navigation";
import { deleteAlat } from "@/server-actions/alat/Alat.action";
import { toast } from "sonner";

const MasterAlatView: FC<MasterAlatProps> = ({ alat }) => {
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);

  const handleDelete = async (id: number) => {
    setIsLoading(true);
    deleteAlat(id);
    toast("Pelanggan berhasil dihapus!");
    router.refresh();
  };
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
            {alat?.data?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{item.alat_nama}</TableCell>
                <TableCell className="max-w-[300px] truncate">
                  {item.alat_deskripsi}
                </TableCell>
                <TableCell>
                  Rp{item.alat_hargaperhari.toLocaleString()}
                </TableCell>
                <TableCell>{item.alat_stok}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <DeleteButton
                      loading={loading}
                      id={item.alat_id}
                      action={handleDelete}
                    />
                    <EditButton href={`/admin/alat/update/${item.alat_id}`} />
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
