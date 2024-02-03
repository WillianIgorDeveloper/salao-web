import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const sans = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Salão Web",
  description: "Agende seu horário em salões de beleza com facilidade e rapidez.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={sans.className}>{children}</body>
    </html>
  );
}
