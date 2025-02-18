"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import MasterAlatFormView from "./MasterAlatForm.view";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const formSchema = z.object({
  alatNama: z.string().nonempty("Nama alat wajib diisi!"),
  alatDeskripsi: z.string().nonempty("Deskripsi alat wajib diisi!"),

  alatHargaPerHari: z.preprocess(
    (val) => (val === "" ? 0 : Number(val)),
    z.number()
  ),
  alatStok: z.preprocess((val) => (val === "" ? 0 : Number(val)), z.number()),
});

export default function MasterAlatForm({
  type,
  handler,
  initialValues,
  id,
}: {
  type: "create" | "update";
  handler: (object: z.infer<typeof formSchema>, id?: number) => void;
  initialValues?: z.infer<typeof formSchema>;
  id?: number;
}) {
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || {
      alatNama: "",
      alatDeskripsi: "",
      alatHargaPerHari: 0,
      alatStok: 0,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      handler(values, id);
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Gagal mengirim form. Silakan coba lagi nanti.");
    } finally {
      toast(
        type === "create"
          ? "Alat berhasil ditambahkan!"
          : "Alat berhasil di update!"
      );
    }
  }

  return (
    <MasterAlatFormView
      loading={loading}
      type={type}
      router={router}
      form={form}
      onSubmit={onSubmit}
    />
  );
}
