import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Food Waste Management",
  description: "Manage and donate food waste efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen`}>
        <aside className="w-64 bg-gray-800 text-white p-4 flex flex-col min-h-screen">
          <nav className="flex flex-col gap-4 flex-grow">
            <Link href="/" className="hover:underline">
              Dashboard
            </Link>
            <Link href="/statistics" className="hover:underline">
              Statistics
            </Link>
            <Link href="/grocery-list" className="hover:underline">
              Grocery List
            </Link>
          </nav>
        </aside>
        <main className="flex-grow p-8">
          {children}
        </main>
      </body>
    </html>
  );
}
