"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import MasterPelangganFormView from "./MasterPelangganForm.view";
import { useRouter } from "next/navigation";
import validator from "validator";
import { useState } from "react";

// Define the Zod schema for Pelanggan
export const formSchema = z.object({
  pelangganNama: z.string().nonempty("Nama pelanggan wajib diisi!"),
  pelangganAlamat: z.string().nonempty("Alamat pelanggan wajib diisi!"),
  pelangganNotelp: z
    .string()
    .min(10, "Nomor telepon harus minimal 10 angka!")
    .refine(validator.isMobilePhone, "Format nomor telepon tidak valid"),
  pelangganEmail: z.string().nonempty("Email pelanggan wajib diisi!"),
});

export default function MasterPelangganForm({
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
  const [loading, setLoading] = useState(false);

  // Initialize the form with default or initial values
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues || {
      pelangganNama: "",
      pelangganAlamat: "",
      pelangganNotelp: "",
      pelangganEmail: "",
    },
  });

  // Handle form submission
  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      handler(values, id);
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Gagal mengirim form. Silakan coba lagi nanti.");
    } finally {
      toast(
        type === "create"
          ? "Pelanggan berhasil ditambahkan!"
          : "Pelanggan berhasil di update!"
      );
    }
  }

  return (
    <MasterPelangganFormView
      loading={loading}
      type={type}
      router={router}
      form={form}
      onSubmit={onSubmit}
    />
  );
}
