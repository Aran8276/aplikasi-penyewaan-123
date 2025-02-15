import React from "react";
import HeaderView from "./Header.view";

export default function Header() {
  const isAdmin = true;
  return <HeaderView isAdmin={isAdmin} />;
}
