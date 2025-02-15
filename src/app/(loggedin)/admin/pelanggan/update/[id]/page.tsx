import MasterPelangganForm from "@/pages/Admin/MasterPelanggan/Form/MasterPelangganForm";

const exampleValues = {
  pelangganNama: "halo",
  pelangganAlamat: "alo",
  pelangganNotelp: "1000",
  pelangganEmail: "a@a.com",
};

export async function handleSubmit(object: object) {
  "use server";

  // handle delete ke server disini
  console.log(object);
}

export default function page() {
  return (
    <MasterPelangganForm
      type="update"
      initialValues={exampleValues}
      handler={handleSubmit}
    />
  );
}
