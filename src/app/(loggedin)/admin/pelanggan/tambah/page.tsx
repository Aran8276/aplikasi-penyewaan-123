import MasterPelangganForm from "@/pages/Admin/MasterPelanggan/Form/MasterPelangganForm";

export async function handleSubmit(object: object) {
  "use server";

  // handle delete ke server disini
  console.log(object);
}

export default function page() {
  return <MasterPelangganForm type="create" handler={handleSubmit} />;
}
