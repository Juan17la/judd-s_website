"use client";
import { usePathname } from "next/navigation";
import { HouseLine, ChatCircleText, Images } from "@phosphor-icons/react";
import Tab from "../atoms/Tab";

const PAGES = [["/", HouseLine], ["/posts", ChatCircleText], ["/gallery", Images]];

// a segmented control sitting on the banner's bottom edge
export default function Nav({ pages }) {
  const path = usePathname();
  return (
    <nav className="relative bg-brand-pale px-3 pt-3 md:-mt-14 md:bg-transparent md:pt-0 md:pb-3">
      <div className="inline-flex flex-wrap gap-1 rounded-xl bg-brand/90 p-1 shadow-sm">
        {PAGES.map(([href, icon], i) => <Tab key={href} href={href} icon={icon} look={path === href ? "active" : "idle"}>{pages[i]}</Tab>)}
      </div>
    </nav>
  );
}
