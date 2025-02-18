import React from "react";
import DeleteButtonView from "./DeleteButton.view";

export default function DeleteButton({
  id,
  action,
  loading,
}: {
  id: number;
  action: (id: number) => void;
  loading: boolean;
}) {
  return <DeleteButtonView loading={loading} action={action} id={id} />;
}
