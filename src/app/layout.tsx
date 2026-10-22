import { Montserrat } from "next/font/google";
import Footer from "@/components/footer/footer"
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="flex flex-col min-h-screen">
        {children}
        <div className="flex-1 mt-10">
          <Footer />
        </div>
      </body>
    </html>
  );
}