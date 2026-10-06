import Link from "next/link";

const base = "relative z-10 rounded-t-xl border-3 border-b-0 border-dashed border-brand-dark px-4 pt-2 pb-1.5 font-display text-base tracking-wide transition hover:-translate-y-1";
const looks = {
  idle: "bg-brand-light text-ink hover:bg-white",
  active: "-translate-y-1 bg-brand-pale text-ink",
  accent: "bg-accent text-black hover:bg-brand",
};

export default function Tab({ href, look = "idle", children }) {
  return <Link href={href} className={`${base} ${looks[look]}`}>{children}</Link>;
}
