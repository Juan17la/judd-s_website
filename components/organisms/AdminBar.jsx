import Link from "next/link";
import Button from "../atoms/Button";
import { logout } from "@/lib/actions";

const LINKS = [["/admin", "Dashboard"], ["/admin/posts", "Posts"], ["/admin/gallery", "Gallery"], ["/admin/messages", "Messages"], ["/", "View site"]];

export default function AdminBar() {
  return (
    <div className="mx-auto mb-4 flex max-w-190 flex-wrap items-center justify-between gap-3 rounded-lg border border-line bg-surface px-3 py-2">
      <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm font-semibold text-hi">
        {LINKS.map(([href, label]) => <Link key={href} href={href} className="hover:text-accent">{label}</Link>)}
      </nav>
      <form action={logout}><Button size="sm">Log out</Button></form>
    </div>
  );
}
