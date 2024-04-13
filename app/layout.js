import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getDocuments } from "@/lib/doc";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next-Docs - A documentation website by next.js",
  description: "A documentation website by next.js",
};

export default function RootLayout({ children }) {
  const allDocuments = getDocuments();
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-full lg:ml-72 xl:ml-80">
          <Header docs={allDocuments} />
          <div class="relative px-4 pt-14 sm:px-6 lg:px-8">
            <main class="flex-auto py-16">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
