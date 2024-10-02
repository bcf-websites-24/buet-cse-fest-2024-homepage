import "./globals.css";
import { Sora } from "next/font/google";

import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import { NavBar } from "@/components/nav/nav-bar";
import { Footer } from "@/components/footer";
import Head from "next/head";

const mono = Sora({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "BUET CSE Fest 2024",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={cn(
          mono.variable,
          "min-h-screen flex flex-col justify-between items-center w-full font-mono relative max-w-[100vw] overflow-x-hidden"
        )}
      >
        <NextTopLoader color="#3bbb96" height={4} showSpinner={false} />
        <NavBar />
        <main className="flex-1 w-full h-full flex">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
