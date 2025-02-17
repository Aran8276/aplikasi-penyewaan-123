import MasterAlatForm, {
  formSchema,
} from "@/pages/Admin/MasterAlat/Form/MasterAlatForm";
import { storeAlat } from "@/server-actions/alat/Alat.action";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function handleSubmit(object: z.infer<typeof formSchema>) {
  "use server";

  // handle delete ke server disini
  storeAlat({
    alat_kategori_id: 2,
    alat_nama: object.alatNama,
    alat_deskripsi: object.alatDeskripsi,
    alat_hargaperhari: Number(object.alatHargaPerHari),
    alat_stok: Number(object.alatStok),
  });

  redirect("/admin/alat/");
}

export default function page() {
  return <MasterAlatForm type="create" handler={handleSubmit} />;
}
