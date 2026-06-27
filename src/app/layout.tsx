import type { Metadata } from "next";
import { Space_Grotesk, Silkscreen } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const silkscreen = Silkscreen({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Girish's Portfolio",
  description: "Explore my world. Discover my work. Meet the builder behind it.",
  openGraph: {
    title: "Girish's Portfolio",
    description: "Explore my world. Discover my work. Meet the builder behind it.",
    url: 'https://portfolio-girish.vercel.app',
    siteName: "Girish's Portfolio",
    images: [
      {
        url: '/codedex/Landing_Text.png',
        width: 1200,
        height: 630,
        alt: "Girish's Portfolio",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Girish's Portfolio",
    description: "Explore my world. Discover my work. Meet the builder behind it.",
    images: ['/codedex/Landing_Text.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${silkscreen.variable}`}>
      <head>
        <script src="https://code.iconify.design/3/3.1.0/iconify.min.js" async></script>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
