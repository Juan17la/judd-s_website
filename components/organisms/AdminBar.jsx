import Link from "next/link";
import Button from "../atoms/Button";
import { logout } from "@/lib/actions";

const LINKS = [["/admin", "Dashboard"], ["/admin/posts", "Posts"], ["/admin/gallery", "Gallery"], ["/admin/messages", "Messages"], ["/", "View site ↗"]];

export default function AdminBar() {
  return (
    <div className="mx-auto mb-4 flex max-w-190 flex-wrap items-center justify-between gap-3 border-2 border-dashed border-brand-dark bg-white/70 px-3 py-2">
      <nav className="flex flex-wrap gap-x-4 gap-y-1 font-display text-lg tracking-wide text-black">
        {LINKS.map(([href, label]) => <Link key={href} href={href} className="underline decoration-dotted underline-offset-4 hover:text-accent">{label}</Link>)}
      </nav>
      <form action={logout}><Button size="sm">Log out</Button></form>
    </div>
  );
}
