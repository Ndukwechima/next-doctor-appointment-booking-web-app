import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor Appointment Booking Web-app",
  description:
    "Doctor Appointment Booking Web-app using Next.js, Tailwind css, Strapi and Shadcd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:px-20">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
