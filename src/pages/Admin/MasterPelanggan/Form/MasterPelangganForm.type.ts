import { UseFormReturn } from "react-hook-form";
import { z } from "zod";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { formSchema } from "./MasterPelangganForm";

export interface MasterPelangganProps {
  form: UseFormReturn<
    {
      pelangganNama: string;
      pelangganAlamat: string;
      pelangganNotelp: string;
      pelangganEmail: string;
    },
    undefined
  >;

  onSubmit(values: z.infer<typeof formSchema>): void;
  router: AppRouterInstance;
  type: "create" | "update";
}
