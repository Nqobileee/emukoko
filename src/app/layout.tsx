import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import LayoutShell from "@/components/LayoutShell";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: {
    default: "Emukoko Innovations | Smart Beekeeping Platform",
    template: "%s | Emukoko Innovations",
  },
  description:
    "Revolutionizing beekeeping with smart IoT sensors, AI diagnostics, and community-driven insights. Empowering rural beekeepers across Zimbabwe.",
  keywords: [
    "smart beekeeping",
    "IoT sensors",
    "AI diagnostics",
    "honey marketplace",
    "Zimbabwe beekeeping",
    "Emukoko",
  ],
  openGraph: {
    title: "Emukoko Innovations | Smart Beekeeping Platform",
    description:
      "Revolutionizing beekeeping with smart IoT sensors, AI diagnostics, and community-driven insights.",
    url: "https://emukoko.vercel.app",
    siteName: "Emukoko Innovations",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emukoko Innovations | Smart Beekeeping Platform",
    description:
      "Revolutionizing beekeeping with smart IoT sensors, AI diagnostics, and community-driven insights.",
  },
  metadataBase: new URL("https://emukoko.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <Providers>
          <LayoutShell>{children}</LayoutShell>
        </Providers>
      </body>
    </html>
  );
}
