import { Urbanist } from "next/font/google";
// import { ClerkProvider } from "@clerk/nextjs";
// import { ThemeProvider } from "@/providers/theme-provider";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "Store",
  description: "Store - The place for all your purchases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={font.className}>
          {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
            <ToastProvider />
            <ModalProvider />
            <Navbar />
            {children}
            <Footer />
          {/* </ThemeProvider> */}
        </body>
      </html>
  );
}
