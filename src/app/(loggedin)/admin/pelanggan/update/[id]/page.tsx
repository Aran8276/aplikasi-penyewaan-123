import MasterPelangganForm, {
  formSchema,
} from "@/pages/Admin/MasterPelanggan/Form/MasterPelangganForm";
import {
  showPelanggan,
  updatePelanggan,
} from "@/server-actions/pelanggan/Pelanggan.action";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function handleSubmit(
  object: z.infer<typeof formSchema>,
  id?: number
) {
  "use server";

  // handle delete ke server disini
  // handle delete ke server disini
  if (id) {
    updatePelanggan(
      {
        pelanggan_nama: object.pelangganNama,
        pelanggan_alamat: object.pelangganAlamat,
        pelanggan_notelp: object.pelangganNotelp,
        pelanggan_email: object.pelangganEmail,
      },
      id
    );
  }
  redirect("/admin/pelanggan");
}

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const fetchValues = await showPelanggan(Number((await params).id));

  const initialValues = {
    pelangganNama: fetchValues ? fetchValues.data.pelanggan_nama : "",
    pelangganAlamat: fetchValues ? fetchValues.data.pelanggan_alamat : "",
    pelangganNotelp: fetchValues ? fetchValues.data.pelanggan_notelp : "",
    pelangganEmail: fetchValues ? fetchValues.data.pelanggan_email : "",
  };
  return (
    <MasterPelangganForm
      id={Number((await params).id)}
      type="update"
      initialValues={initialValues}
      handler={handleSubmit}
    />
  );
}
