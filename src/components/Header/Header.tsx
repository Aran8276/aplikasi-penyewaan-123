"use server";

import React from "react";
import HeaderView from "./Header.view";
import { getUser } from "@/server-actions/auth/User/User.action";

export default async function Header() {
  const user = await getUser();
  const isAdmin = true;
  return <HeaderView user={user} isAdmin={isAdmin} />;
}
