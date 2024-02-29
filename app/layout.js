import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor Appointment Booking Web-app",
  description:
    "Doctor Appointment Booking Web-app using Next.js, Tailwind css, Strapi and Shadcd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="md:px-20">
          <Header />
        </div>
        {children}
      </body>
    </html>
  );
}
