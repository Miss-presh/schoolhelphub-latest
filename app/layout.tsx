import type { Metadata } from "next";
import { CurrencyProvider } from "@/context/CurrencyContext";
import ScrollReveal from "@/components/ScrollReveal";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Schoolhelphub — Expert Online Tutoring | Nigeria · UK · USA",
  description:
    "Live online tutoring for children aged 5–16 in Nigeria, UK and USA. WAEC, GCSE, 11+ and SAT prep. Qualified teachers. Written progress report after every session.",
  keywords: [
    "online tutoring Nigeria",
    "WAEC tutoring online",
    "GCSE tutoring online",
    "11+ tutoring online",
    "KS2 KS3 online tutor",
    "online maths tutor UK",
    "private tutor Lagos",
    "Nigerian school tutoring",
    "online tutoring for kids",
  ],
  openGraph: {
    title: "Schoolhelphub — Expert Online Tutoring",
    description: "Live tutoring · Written report after every session · Ages 5–16 · Nigeria · UK · USA",
    type: "website",
  },
  icons: {
    icon: `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎓</text></svg>`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-brand-cream text-brand-textNearBlack font-sans antialiased">
        <CurrencyProvider>
          <ScrollReveal />
          {children}
        </CurrencyProvider>
      </body>
    </html>
  );
}
