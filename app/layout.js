import "./globals.css";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

import Navigation from "@/components/Navigation";

export const metadata = {
  title: "Perfect PreRolls",
  description: "Packed and Ready To Go",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark ${bebasNeue.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
