"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import { ReactNode } from "react";

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Add all auth routes here
  const authRoutes = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
  ];

  const hideNavbar = authRoutes.some((route) => pathname.startsWith(route));

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className={!hideNavbar ? "pt-20" : ""}>{children}</main>
    </>
  );
}
