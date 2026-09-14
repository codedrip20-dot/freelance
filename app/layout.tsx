import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeDrip | Web Developer",
  description:
    "CodeDrip builds modern websites, web applications, and digital experiences for businesses and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        

        {children}

        <Footer />
      </body>
    </html>
  );
}