import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Providers } from "@/providers/ChakraProvider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({weight: ["400", "500"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Azimuth Pastindo Mandiri",
  description: "Azimuth provides all your constructing needs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
