import MasterAlatForm, {
  formSchema,
} from "@/pages/Admin/MasterAlat/Form/MasterAlatForm";
import { showAlat, updateAlat } from "@/server-actions/alat/Alat.action";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function handleSubmit(
  object: z.infer<typeof formSchema>,
  id?: number
) {
  "use server";

  // handle delete ke server disini
  if (id) {
    updateAlat(
      {
        alat_kategori_id: 2,
        alat_nama: object.alatNama,
        alat_deskripsi: object.alatDeskripsi,
        alat_hargaperhari: Number(object.alatHargaPerHari),
        alat_stok: Number(object.alatStok),
      },
      id
    );
  }
  redirect("/admin/alat");
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const fetchValues = await showAlat(Number((await params).id));

  const initialValues = {
    alatNama: fetchValues ? fetchValues.data.alat_nama : "",
    alatDeskripsi: fetchValues ? fetchValues.data.alat_deskripsi : "",
    alatHargaPerHari: fetchValues ? fetchValues.data.alat_hargaperhari : 0,
    alatStok: fetchValues ? fetchValues.data.alat_stok : 0,
  };
  return (
    <MasterAlatForm
      type="update"
      initialValues={initialValues || undefined}
      handler={handleSubmit}
      id={Number((await params).id)}
    />
  );
}
