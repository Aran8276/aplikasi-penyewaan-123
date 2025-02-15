import React from "react";
import DeleteButtonView from "./DeleteButton.view";

export default function DeleteButton({
  id,
  action,
}: {
  id: number;
  action: (id: number) => void;
}) {
  return <DeleteButtonView action={action} id={id} />;
}
