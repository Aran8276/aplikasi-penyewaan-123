import React from "react";
import HeaderView from "./HeaderView";

export default function Header() {
  const isAdmin = true;
  return <HeaderView isAdmin={isAdmin} />;
}
