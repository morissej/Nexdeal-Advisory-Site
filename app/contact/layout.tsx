import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | NexDeal Advisory",
  description: "Entrons en contact pour discuter de vos besoins stratégiques en M&A."
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
