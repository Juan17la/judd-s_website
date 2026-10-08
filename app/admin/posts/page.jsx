import Window from "@/components/molecules/Window";
import PostRow from "@/components/molecules/PostRow";
import DeleteButton from "@/components/molecules/DeleteButton";
import AdminBar from "@/components/organisms/AdminBar";
import PostForm from "@/components/organisms/PostForm";
import { all } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { deletePost } from "@/lib/actions";

export const dynamic = "force-dynamic";

export default async function AdminPosts() {
  await requireAdmin();
  const posts = await all("SELECT * FROM posts ORDER BY id DESC LIMIT 200");
  return (
    <>
      <AdminBar />
      <div className="mx-auto max-w-190">
        <Window title="New post"><PostForm /></Window>
        <Window title="Your posts" last>
          {posts.length ? posts.map((p) => <PostRow key={p.id} post={p}><DeleteButton action={deletePost} id={p.id} /></PostRow>) : <p className="py-8 text-center text-muted">No posts yet.</p>}
        </Window>
      </div>
    </>
  );
}
