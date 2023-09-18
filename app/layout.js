import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Perfect Prerolls",
  description: "Packed and Ready To Go",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark ${inter.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
