import { Gear } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Window from "@/components/molecules/Window";
import AdminBar from "@/components/organisms/AdminBar";
import { first } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  await requireAdmin();
  const count = async (table) => (await first(`SELECT COUNT(*) n FROM ${table}`)).n;
  const [np, ng, nm] = await Promise.all(["posts", "gallery", "messages"].map(count));
  const cards = [["/admin/posts", "Posts", np, "write or delete a post"], ["/admin/gallery", "Gallery", ng, "add or delete a photo"], ["/admin/messages", "Messages", nm, "what people sent you"]];
  return (
    <>
      <AdminBar />
      <div className="mx-auto max-w-190">
        <Window title="Backstage" icon={Gear} last>
          <div className="grid gap-4 p-4 sm:grid-cols-3">
            {cards.map(([href, label, n, hint]) => (
              <Link key={href} href={href} className="card lift block p-4">
                <span className="block font-display text-4xl text-hi">{n}</span>
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
