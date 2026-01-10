import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Main } from "@/components/ds";

const figtree = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPPG Nanjungjaya Always Be Positive",
  description:
    "Geospasial Penerima Manfaat SPPG Garut Kersamanah Nanjungjaya Yayasan Always Be Positive",
  icons: {
    icon: "/bgn.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.className}>
      <body>
        <Main>{children}</Main>
      </body>
    </html>
  );
}
