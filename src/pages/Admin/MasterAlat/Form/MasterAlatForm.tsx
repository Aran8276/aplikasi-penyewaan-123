"use client";

import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import MasterAlatFormView from "./MasterAlatForm.view";
import { useRouter } from "next/navigation";

export const formSchema = z.object({
  alatNama: z.string(),
  alatDeskripsi: z.string(),
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
}: {
  type: "create" | "update";
  handler: (object: z.infer<typeof formSchema>, id?: number) => void;
  initialValues?: z.infer<typeof formSchema>;
}) {
  const router = useRouter();
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
    try {
      handler(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <MasterAlatFormView
      type={type}
      router={router}
      form={form}
      onSubmit={onSubmit}
    />
  );
}
