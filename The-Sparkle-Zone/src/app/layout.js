import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

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

export const metadata = {
  title: "The Sparkle Zone",
  description: "My site of many things with Next.js",
  author: "Nicky Mortoza-Cowles",
};

export default function RootLayout({ children }) {
  const { isSignedIn } = useUser();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {isSignedIn ? (
          <>
            <Header />
            {children}
            <Footer />
          </>
        ) : (
          <>
            <Header />
            <main className="flex flex-col items-center justify-center min-h-screen">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to The Sparkle Zone
              </h1>
              <p className="text-lg mb-4">
                Please sign in to access more features.
              </p>
              <div className="flex space-x-4">
                <Link href="/" className="btn btn-primary">
                  Home
                </Link>
                <Link href="/about" className="btn btn-secondary">
                  About
                </Link>
              </div>
            </main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
