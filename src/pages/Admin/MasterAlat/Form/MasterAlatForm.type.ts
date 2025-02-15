import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./MasterAlatForm";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface MasterAlatProps {
  form: UseFormReturn<
    {
      alatNama: string;
      alatDeskripsi: string;
      alatHargaPerHari: number;
      alatStok: number;
    },
    undefined
  >;

  onSubmit(values: z.infer<typeof formSchema>): void;
  router: AppRouterInstance;
  type: "create" | "update";
}
