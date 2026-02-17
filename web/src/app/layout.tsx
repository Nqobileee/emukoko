import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Emukoko Innovations — Smart Beekeeping Platform",
    template: "%s | Emukoko Innovations",
  },
  description:
    "Revolutionizing beekeeping with IoT monitoring, AI diagnostics, and community-driven marketplace. Empowering rural communities through technology.",
  keywords: [
    "smart beekeeping",
    "IoT hive monitoring",
    "AI diagnostics",
    "honey marketplace",
    "Emukoko",
    "rural empowerment",
    "sustainable agriculture",
  ],
  openGraph: {
    title: "Emukoko Innovations — Smart Beekeeping Platform",
    description:
      "Nature's intelligence, amplified by technology. IoT sensors, AI diagnostics, and a digital marketplace for beekeepers.",
    type: "website",
    locale: "en_US",
    siteName: "Emukoko Innovations",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emukoko Innovations — Smart Beekeeping Platform",
    description:
      "Revolutionizing beekeeping with IoT monitoring, AI diagnostics, and community-driven marketplace.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} font-sans antialiased hex-bg min-h-screen`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
