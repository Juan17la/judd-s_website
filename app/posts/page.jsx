import { ChatCircleText } from "@phosphor-icons/react/dist/ssr";
import Window from "@/components/molecules/Window";
import PostRow from "@/components/molecules/PostRow";
import Avatar from "@/components/atoms/Avatar";
import TwoColumns from "@/components/templates/TwoColumns";
import AboutCard from "@/components/organisms/AboutCard";
import BadgesCard from "@/components/organisms/BadgesCard";
import { prefs, T } from "@/lib/i18n";
import db from "@/lib/db";

export const metadata = { title: "Posts" };
export const dynamic = "force-dynamic"; // read the db on every request

export default async function Posts() {
  const { lang } = await prefs();
  const t = T[lang];
  const posts = db.prepare("SELECT * FROM posts ORDER BY id DESC LIMIT 200").all();
  return (
    <TwoColumns sidebar={<><AboutCard t={t} /><BadgesCard t={t} /></>}>
      <Window title={t.posts} icon={ChatCircleText} tone="teal" last>
        <div className="relative h-24 bg-linear-to-b from-raise to-brand">
          
          <Avatar className="absolute -bottom-9 left-4 size-20 border-2 border-surface text-4xl" />
        </div>
        <div className="border-b border-line bg-surface px-4 pt-11 pb-3">
          <b className="font-display text-xl font-normal tracking-wide">Jud</b> <span className="text-muted">@1714Jud</span>
          <p className="text-sm">{t.bio}</p>
        </div>
        {posts.length ? posts.map((p) => <PostRow key={p.id} post={p} via={t.via} lang={lang} />) : <p className="py-10 text-center font-medium text-muted">{t.empty}</p>}
      </Window>
    </TwoColumns>
  );
}
