import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Emukoko Innovations. Whether you're a beekeeper, consumer, partner, or investor — we'd love to hear from you.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
