"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/lib/constant";
import { usePathname } from "next/navigation";
import UserNav from "./UserNav";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="pb-8 flex justify-between">
      <div className="flex items-center gap-x-16">
        <Link href="/home" className="w-fit inline-block">
          <Image
            src={"/assets/logo.svg"}
            width={80}
            height={80}
            alt=""
            className="w-32 md:w-40"
            priority
          />
        </Link>

        <ul className="hidden lg:flex lg:gap-x-6">
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className={`hover:opacity-100 ${
                  pathName === link.href
                    ? "underline underline-offset-4 font-semibold"
                    : "text-gray-100 opacity-70"
                }`}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex items-center">
        <UserNav />
      </div>
    </div>
  );
};

export default Navbar;
