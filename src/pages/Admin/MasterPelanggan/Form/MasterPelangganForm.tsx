"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import MasterPelangganFormView from "./MasterPelangganForm.view";
import { useRouter } from "next/navigation";

// Define the Zod schema for Pelanggan
export const formSchema = z.object({
  pelangganNama: z.string(),
  pelangganAlamat: z.string(),
  pelangganNotelp: z.string(),
  pelangganEmail: z.string(),
});

export default function MasterPelangganForm({
  type,
  handler,
  initialValues,
}: {
  type: "create" | "update";
  handler: (object: z.infer<typeof formSchema>, id?: number) => void;
  initialValues?: z.infer<typeof formSchema>;
}) {
  const router = useRouter();

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
    try {
      handler(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Gagal mengirim form. Silakan coba lagi nanti.");
    }
  }

  return (
    <MasterPelangganFormView
      type={type}
      router={router}
      form={form}
      onSubmit={onSubmit}
    />
  );
}
