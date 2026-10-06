import Window from "@/components/molecules/Window";
import DeleteButton from "@/components/molecules/DeleteButton";
import AdminBar from "@/components/organisms/AdminBar";
import db from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { deleteMessage } from "@/lib/actions";

export const dynamic = "force-dynamic";
const when = (t) => new Date(t * 1000).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" });

export default async function AdminMessages() {
  await requireAdmin();
  const messages = db.prepare("SELECT * FROM messages ORDER BY id DESC LIMIT 200").all();
  return (
    <>
      <AdminBar />
      <div className="mx-auto max-w-190">
        <Window title="Messages" last>
          {messages.length ? messages.map((m) => (
            <div key={m.id} className="border-b-2 border-dashed border-brand-dark/40 px-4 py-4 last:border-0">
              <div className="flex flex-wrap items-baseline gap-x-2 text-sm">
                <b className="font-display text-lg font-normal tracking-wide">{m.name}</b>
                {m.email && <a href={`mailto:${m.email}`} className="text-black underline">{m.email}</a>}
                <span className="text-muted">{when(m.created)}</span>
              </div>
              <p className="mt-1 break-words whitespace-pre-wrap">{m.body}</p>
              <DeleteButton action={deleteMessage} id={m.id} />
            </div>
          )) : <p className="py-8 text-center text-muted">No messages yet.</p>}
        </Window>
      </div>
    </>
  );
}
