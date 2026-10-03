import type { Metadata, Viewport } from "next";
import { Geist_Mono, Onest, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/layout/Analytics";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site-config";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  style: ["normal", "italic"],
});

const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

const gsc = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [{ url: "/brand/favicon-v2.png", type: "image/png" }],
    apple: [{ url: "/brand/favicon-v2.png", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "/brand/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "DevsRoute — MVP & AI software development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/brand/og/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(gsc
    ? {
        verification: {
          google: gsc,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#1d81f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${onest.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/brand/devsroute-logo-color-sm.png"
          type="image/png"
          fetchPriority="high"
        />
      </head>
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
