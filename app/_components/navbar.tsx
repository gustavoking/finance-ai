"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const navLinkClass = (path: string) =>
    `relative group pb-1 ${
      pathname === path ? "font-bold text-primary" : "text-muted-foreground"
    }`;

  const underlineClass = (path: string) =>
    `absolute bottom-0 left-0 h-[2px] w-full bg-green-500 transition-transform duration-300 ease-in-out origin-center ${
      pathname === path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
    }`;

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image src="./logo.svg" width={173} height={39} alt="Finance AI" />

        <Link href="/" className={navLinkClass("/")}>
          Dashboard
          <span className={underlineClass("/")} />
        </Link>

        <Link href="/transactions" className={navLinkClass("/transactions")}>
          Transações
          <span className={underlineClass("/transactions")} />
        </Link>

        <Link href="/subscription" className={navLinkClass("/subscription")}>
          Assinatura
          <span className={underlineClass("/subscription")} />
        </Link>
      </div>

      <UserButton showName />
    </nav>
  );
};

export default NavBar;
