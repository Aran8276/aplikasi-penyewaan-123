"use client";

import React from "react";
import NotFoundErrorView from "./NotFoundError.view";
import { useRouter } from "next/navigation";

export default function NotFoundError() {
  const router = useRouter();
  return <NotFoundErrorView router={router} />;
}
