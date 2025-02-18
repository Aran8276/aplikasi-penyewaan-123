"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { FC } from "react";
import { DeleteButtonProps } from "./DeleteButton.type";
import LoadableButton from "../LoadableButton/LoadableButton";

const DeleteButtonView: FC<DeleteButtonProps> = ({ action, id, loading }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-red-500 text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <Trash2 />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Apakah anda yakin untuk menghapus data id {`"${id}"`}?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Aksi ini tidak dapat dikembalikan. Jika anda tidak yakin, silakan
            batalkan. Jika anda yakin, klik {`"Hapus"`} untuk konfirmasi
            penghapusan data ini.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Tutup</AlertDialogCancel>
          <LoadableButton
            loading={loading}
            onClick={() => action(id)}
            className="bg-red-500 text-white hover:bg-red-400"
          >
            <Trash2 />
            Hapus
          </LoadableButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButtonView;
