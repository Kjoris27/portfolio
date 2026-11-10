import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080808",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3001";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: "Joseph Edim | Software Engineer",
    description: "Joseph Edim, Software Engineer à Lomé. Applications web et mobiles, API REST et systèmes backend évolutifs.",
    keywords: ["Joseph Edim", "Software Engineer", "Full-Stack Developer", "Node.js", "Next.js", "Flutter", "Lomé", "Togo"],
    authors: [{ name: "Joseph Edim", url: "https://www.linkedin.com/in/joseph-edim" }],
    openGraph: {
      type: "website",
      locale: "fr_FR",
      alternateLocale: "en_US",
      title: "Joseph Edim | Software Engineer",
      description: "Applications web et mobiles, API et systèmes backend.",
      images: [{ url: new URL("/og.png", base), width: 1792, height: 938, alt: "Joseph Edim | Software Engineer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Joseph Edim | Software Engineer",
      description: "Applications web et mobiles, API et systèmes backend.",
      images: [new URL("/og.png", base)],
    },
    icons: { icon: "/joseph-edim.png", apple: "/joseph-edim.png" },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
