import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Assignment - 7 Solutions",
  description: "A frontend assignment for 7 Solutions using Next.js",
  keywords: ["Next.js", "Frontend", "Assignment", "React"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-gray-800 p-4">
          <ul className="flex justify-around">
            <li>
              <Link href="/" className="text-white hover:text-gray-400">
                <p>Auto Delete Todo List</p>
              </Link>
            </li>
            <li>
              <Link href="/api" className="text-white hover:text-gray-400">
                <p>Create data from API</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div style={{ margin: "16px", display: "flex", flex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
