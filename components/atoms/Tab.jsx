import Link from "next/link";

const base = "relative z-10 inline-flex items-center gap-2 rounded-t-lg border border-b-0 border-line px-4 pt-2 pb-1.5 text-sm font-semibold tracking-wide transition";
const looks = { idle: "bg-brand text-muted hover:bg-raise hover:text-hi", active: "bg-brand-pale text-hi" };

export default function Tab({ href, icon: Icon, look = "idle", children }) {
  return <Link href={href} className={`${base} ${looks[look]}`}>{Icon && <Icon size={16} weight={look === "active" ? "fill" : "regular"} aria-hidden="true" />}{children}</Link>;
}
