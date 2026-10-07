"use client";
import { usePathname } from "next/navigation";
import { HouseLine, ChatCircleText, Images } from "@phosphor-icons/react";
import Tab from "../atoms/Tab";

const PAGES = [["/", HouseLine], ["/posts", ChatCircleText], ["/gallery", Images]];

export default function Nav({ pages }) {
  const path = usePathname();
  return (
    <nav className="relative flex flex-wrap items-end gap-2 px-3 pt-3 md:-mt-10 md:pt-0">
      {PAGES.map(([href, icon], i) => <Tab key={href} href={href} icon={icon} look={path === href ? "active" : "idle"}>{pages[i]}</Tab>)}
    </nav>
  );
}
