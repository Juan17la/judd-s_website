import Link from "next/link";
import Window from "@/components/molecules/Window";
import AdminBar from "@/components/organisms/AdminBar";
import db from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  await requireAdmin();
  const count = (table) => db.prepare(`SELECT COUNT(*) n FROM ${table}`).get().n;
  const cards = [["/admin/posts", "Posts", count("posts"), "write or delete a post"], ["/admin/gallery", "Gallery", count("gallery"), "add or delete a photo"], ["/admin/messages", "Messages", count("messages"), "what people sent you"]];
  return (
    <>
      <AdminBar />
      <div className="mx-auto max-w-190">
        <Window title="Backstage" last>
          <div className="grid gap-4 p-4 sm:grid-cols-3">
            {cards.map(([href, label, n, hint]) => (
              <Link key={href} href={href} className="block border-3 border-brand-dark bg-white p-4 transition hover:-translate-y-1 hover:shadow-hard-lg">
                <span className="block font-display text-4xl text-black">{n}</span>
                <span className="block font-display text-xl">{label}</span>
                <span className="block text-sm text-muted">{hint}</span>
              </Link>
            ))}
          </div>
        </Window>
      </div>
    </>
  );
}
