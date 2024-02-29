import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
function Header() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact Us",
      path: "/contact",
    },
  ];
  return (
    <header className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <div className="flex gap-1">
          <Image src="/logo.svg" alt="logo" width={30} height={80} />
          <span className="text-pink-600 font-bold text-2xl">De Doctor</span>
        </div>
        <ul className="md:flex gap-8 hidden">
          {Menu.map((item, index) => (
            <Link href={item.path}>
              <li
                className="hover:text-primary hover:scale-105 cursor-pointer
            transition-all ease-in-out"
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Button>Get Started</Button>
    </header>
  );
}

export default Header;
