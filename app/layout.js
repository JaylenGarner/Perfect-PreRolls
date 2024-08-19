import "./globals.css";
import { oswald } from "@/lib/fonts";

import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import Footer from "@/components/Footer";
import FAB from "@/components/FAB";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Perfect PreRolls",
  description: "Packed and Ready To Go",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark no-scrollbar ${oswald.className}`}>
        <div className="max-md:hidden">
          <Navigation />
        </div>
        <div className="md:hidden">
          <MobileNavigation />
        </div>
        <div>{children}</div>
        <Footer />
        <FAB />
        <Analytics />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
    </html>
  );
}
