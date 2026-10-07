import { Images } from "@phosphor-icons/react/dist/ssr";
import Window from "@/components/molecules/Window";
import Polaroid from "@/components/molecules/Polaroid";
import TwoColumns from "@/components/templates/TwoColumns";
import AboutCard from "@/components/organisms/AboutCard";
import BadgesCard from "@/components/organisms/BadgesCard";
import { prefs, T } from "@/lib/i18n";
import db from "@/lib/db";

export const metadata = { title: "Gallery" };
export const dynamic = "force-dynamic";

export default async function Gallery() {
  const { lang } = await prefs();
  const t = T[lang];
  const items = db.prepare("SELECT * FROM gallery ORDER BY id DESC LIMIT 200").all();
  return (
    <TwoColumns sidebar={<><AboutCard t={t} /><BadgesCard t={t} /></>}>
      <Window title={t.gallery} icon={Images} tone="amber" last>
        {items.length ? (
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-8 p-5 pt-7 sm:grid-cols-2">
            {items.map((g) => <Polaroid key={g.id} src={g.src} caption={g.caption} className="transition hover:scale-[1.02]" />)}
          </div>
        ) : <p className="py-10 text-center font-medium text-muted">{t.empty}</p>}
      </Window>
    </TwoColumns>
  );
}
