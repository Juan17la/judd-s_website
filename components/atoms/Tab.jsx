import Link from "next/link";

const base = "inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-sm font-medium transition duration-200";
const looks = { idle: "text-muted hover:bg-raise/60 hover:text-hi", active: "bg-surface text-hi shadow-sm" };

// one segment of the nav's segmented control
export default function Tab({ href, icon: Icon, look = "idle", children }) {
  return <Link href={href} aria-current={look === "active" ? "page" : undefined} className={`${base} ${looks[look]}`}>{Icon && <Icon size={16} weight={look === "active" ? "fill" : "regular"} aria-hidden="true" />}{children}</Link>;
}
