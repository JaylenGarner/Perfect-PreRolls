import "./globals.css";
import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400" });

import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";

export const metadata = {
  title: "Perfect PreRolls",
  description: "Packed and Ready To Go",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark ${bebasNeue.className}`}>
        <div className="max-md:hidden">
          <Navigation />
        </div>
        <div className="md:hidden">
          <MobileNavigation />
        </div>
        {children}
      </body>
    </html>
  );
}
