import "../globals.css";
import { Figtree } from "next/font/google";
import { ReactNode } from "react";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400","500","600","700"]
});

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${figtree.className} bg-gray-50 text-gray-900`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
