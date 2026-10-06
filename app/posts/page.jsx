import Window from "@/components/molecules/Window";
import PostRow from "@/components/molecules/PostRow";
import Avatar from "@/components/atoms/Avatar";
import TwoColumns from "@/components/templates/TwoColumns";
import AboutCard from "@/components/organisms/AboutCard";
import BadgesCard from "@/components/organisms/BadgesCard";
import db from "@/lib/db";

export const metadata = { title: "Posts" };
export const dynamic = "force-dynamic"; // read the db on every request

export default function Posts() {
  const posts = db.prepare("SELECT * FROM posts ORDER BY id DESC LIMIT 200").all();
  return (
    <TwoColumns sidebar={<><AboutCard /><BadgesCard /></>}>
      <Window title="Posts ~ shouting into the void" last>
        <div className="relative h-24 bg-linear-to-b from-brand to-brand-mid">
          <span className="absolute top-2 right-3 text-2xl text-black">★</span>
          <Avatar className="absolute -bottom-9 left-4 size-20 border-4 border-white text-4xl" />
        </div>
        <div className="border-b-3 border-dashed border-brand-dark bg-brand-light/50 px-4 pt-11 pb-3">
          <b className="font-display text-xl font-normal tracking-wide">Jud</b> <span className="text-muted">@1714Jud</span>
          <p className="text-sm">just a guy with a keyboard and too many opinions about linux ✦</p>
        </div>
        {posts.length ? posts.map((p) => <PostRow key={p.id} post={p} />) : <p className="py-10 text-center font-medium text-muted">nothing here yet... check back soon ✧</p>}
      </Window>
    </TwoColumns>
  );
}
