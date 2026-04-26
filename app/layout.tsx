import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { Main } from "@/components/ds";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/Header";

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
    <html lang="en" className={figtree.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <Main>{children}</Main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
