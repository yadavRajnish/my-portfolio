import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { ToastProvider } from "./components/toaster/toaster";
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: 'Portfolio | Rajnish',
  description: 'MERN Stack Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col w-full">
          <Header />
          <main className="flex-1">{children}</main>
          <ToastProvider />
          <Footer />
        </div>
      </body>
    </html>
  )
}

