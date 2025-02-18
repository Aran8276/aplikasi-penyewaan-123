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
import Link from "next/link";
import DeleteButton from "@/components/DeleteButton/DeleteButton";
import EditButton from "@/components/EditButton";
import { MasterPelangganProps } from "./MasterPelanggan.type";
import { useRouter } from "next/navigation";
import { deletePelanggan } from "@/server-actions/pelanggan/Pelanggan.action";
import { toast } from "sonner";

const MasterPelangganView: FC<MasterPelangganProps> = ({ pelanggan }) => {
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);

  const handleDelete = (id: number) => {
    setIsLoading(true);
    deletePelanggan(id);
    toast("Pelanggan berhasil dihapus!");
    router.refresh();
  };
  return (
    <section className="space-y-8 w-screen my-8 px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Manajemen Pelanggan
        </h2>
        <Link href="/admin/pelanggan/tambah">
          <Button className="bg-blue-500 hover:bg-blue-400">
            <Plus className="mr-2 h-4 w-4" />
            Tambahkan Pelanggan
          </Button>
        </Link>
      </div>
      <div className="rounded-md border">
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
            {pelanggan?.data?.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>{item.pelanggan_nama}</TableCell>
                <TableCell className="w-[500px] line-clamp-2">
                  {item.pelanggan_alamat}
                </TableCell>
                <TableCell>{item.pelanggan_notelp}</TableCell>
                <TableCell>{item.pelanggan_email}</TableCell>
                <TableCell className="flex space-x-3">
                  <DeleteButton
                    loading={loading}
                    id={item.pelanggan_id}
                    action={handleDelete}
                  />
                  <EditButton
                    href={`/admin/pelanggan/update/${item.pelanggan_id}`}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default memo(MasterPelangganView);
