import MasterAlatForm from "@/pages/Admin/MasterAlat/Form/MasterAlatForm";

export async function handleSubmit(object: object) {
  "use server";

  // handle delete ke server disini
  console.log(object);
}

export default function page() {
  return <MasterAlatForm type="create" handler={handleSubmit} />;
}
