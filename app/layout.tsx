import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import { CurrencyProvider } from "@/context/CurrencyContext";
import "@/app/globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Schoolhelphub — Expert Online Tutoring | UK & US",
  description: "Live interactive online tutoring led by qualified academic professionals for ages 5-16. Progress reports delivered after every single session.",
  icons: {
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎓</text></svg>`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}>
      <body className="bg-brand-cream text-brand-textNearBlack font-sans antialiased">
        <CurrencyProvider>
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}