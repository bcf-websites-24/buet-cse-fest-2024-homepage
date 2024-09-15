import "./globals.css";
import { Sora } from "next/font/google";

import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import { NavBar } from "@/components/nav/nav-bar";
import { Footer } from "@/components/footer";

// const sans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-sans",
//   weight: "100 900",
// });
// const mono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-mono",
//   weight: "100 900",
// });

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
      <body
        className={cn(
          mono.variable,
          "min-h-screen flex flex-col justify-between items-center w-full font-mono relative max-w-[100vw] overflow-x-hidden"
        )}
      >
        <NextTopLoader color="#59bfc7" height={4} showSpinner={false} />
        <NavBar />
        <main className="flex-1 w-full h-full flex">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
