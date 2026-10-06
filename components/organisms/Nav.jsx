"use client";
import { usePathname } from "next/navigation";
import Tab from "../atoms/Tab";

const PAGES = [["/", "Judd's Portfolio"], ["/posts", "Posts"], ["/gallery", "Gallery"]];

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="relative flex flex-wrap items-end justify-between gap-2 px-3 pt-3 md:-mt-11 md:-mb-1 md:pt-0">
      <div className="flex flex-wrap items-end gap-2 md:gap-3">
        {PAGES.map(([href, label]) => <Tab key={href} href={href} look={path === href ? "active" : "idle"}>{label}</Tab>)}
      </div>
    </nav>
  );
}
