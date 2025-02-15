import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./Form/MasterPelangganForm";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface MasterPelangganProps {
  form: UseFormReturn<
    {
      pelangganNama: string;
      pelangganAlamat: string;
      pelangganTelepon: string;
      pelangganEmail: string;
    },
    undefined
  >;
  onSubmit(values: z.infer<typeof formSchema>): void;
  router: AppRouterInstance;
  type: "create" | "update";
}
