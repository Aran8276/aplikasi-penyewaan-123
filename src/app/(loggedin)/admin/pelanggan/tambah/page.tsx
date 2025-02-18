import MasterPelangganForm, {
  formSchema,
} from "@/pages/Admin/MasterPelanggan/Form/MasterPelangganForm";
import { storePelanggan } from "@/server-actions/pelanggan/Pelanggan.action";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function handleSubmit(object: z.infer<typeof formSchema>) {
  "use server";

  // handle tambah ke server disini

  storePelanggan({
    pelanggan_nama: object.pelangganNama,
    pelanggan_alamat: object.pelangganAlamat,
    pelanggan_notelp: object.pelangganNotelp,
    pelanggan_email: object.pelangganEmail,
  });

  redirect("/admin/pelanggan/");
}

export default function Page() {
  return <MasterPelangganForm type="create" handler={handleSubmit} />;
}
