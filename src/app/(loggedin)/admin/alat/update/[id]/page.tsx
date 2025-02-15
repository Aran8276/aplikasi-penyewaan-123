import MasterAlatForm from "@/pages/Admin/MasterAlat/Form/MasterAlatForm";

const exampleValues = {
  alatNama: "halo",
  alatDeskripsi: "alo",
  alatHargaPerHari: 1000,
  alatStok: 25,
};

export async function handleSubmit(object: object) {
  "use server";

  // handle delete ke server disini
  console.log(object);
}

export default function page() {
  return (
    <MasterAlatForm
      type="update"
      initialValues={exampleValues}
      handler={handleSubmit}
    />
  );
}
