import type { Metadata } from "next";
import { ThemeProvider } from '@/app/context/ThemeContext';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEVJ7 Portfolio",
  description: "Professional portfolio of C-J7, Reachable on github.com/C-J7, 'The Art of Code'.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
