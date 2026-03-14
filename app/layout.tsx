import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Baghvan",
  description: "Experience the ultimate luxury retreat nestled in the serene wilderness of Jim Corbett, Ramnagar.",
  icons: {
    icon: "/finallogo9.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/finallogo9.png" sizes="any" />
        <link rel="apple-touch-icon" href="/finallogo9.png" />
      </head>
      <body className={`${inter.className} antialiased bg-slate-50`} suppressHydrationWarning>

        <main className="min-h-screen">
          {children}
        </main>

      </body>
    </html>
  );
}
