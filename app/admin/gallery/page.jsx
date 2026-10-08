import Window from "@/components/molecules/Window";
import Polaroid from "@/components/molecules/Polaroid";
import DeleteButton from "@/components/molecules/DeleteButton";
import AdminBar from "@/components/organisms/AdminBar";
import GalleryForm from "@/components/organisms/GalleryForm";
import { all } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { deleteGalleryItem } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function AdminGallery() {
  await requireAdmin();
  const items = await all("SELECT * FROM gallery ORDER BY id DESC LIMIT 200");
  return (
    <>
      <AdminBar />
      <div className="mx-auto max-w-190">
        <Window title="New gallery item"><GalleryForm /></Window>
        <Window title="Your gallery" last>
          {items.length ? (
            <div className="grid grid-cols-1 items-start gap-x-6 gap-y-8 p-5 pt-7 sm:grid-cols-2">
              {items.map((g, i) => (
                <Polaroid key={g.id} src={g.src} caption={g.caption} className={i % 2 ? "" : ""}><DeleteButton action={deleteGalleryItem} id={g.id} /></Polaroid>
              ))}
            </div>
          ) : <p className="py-8 text-center text-muted">Nothing in the gallery yet.</p>}
        </Window>
      </div>
    </>
  );
}
