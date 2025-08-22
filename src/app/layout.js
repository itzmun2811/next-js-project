import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import NextAuthProvider from "@/Provider/NextAuthProvider";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Website",
  description: "welcome to Next.Js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <NextAuthProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
      >
            <Navbar></Navbar>
       <div className="max-x-7xl mx-auto ">
{children}
       </div>
      <Footer></Footer>
      </body>
      </NextAuthProvider>

    </html>
  );
}
