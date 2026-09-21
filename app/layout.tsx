import type { Metadata } from "next";
import { Fredoka, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import PawTrail from "./components/PawTrail";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // TODO: replace with the real production domain before launch.
  metadataBase: new URL("https://www.barkandbubbles.com"),
  title: "Bark & Bubbles | Dog Grooming Studio",
  description:
    "Gentle, professional dog grooming in Anytown — book a bath, trim, or full groom online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex flex-1 flex-col items-center justify-center bg-[#fee199] font-sans">
          <PawTrail />
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
