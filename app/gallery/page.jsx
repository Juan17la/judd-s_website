import Window from "@/components/molecules/Window";
import Polaroid from "@/components/molecules/Polaroid";
import TwoColumns from "@/components/templates/TwoColumns";
import AboutCard from "@/components/organisms/AboutCard";
import BadgesCard from "@/components/organisms/BadgesCard";
import db from "@/lib/db";

export const metadata = { title: "Gallery" };
export const dynamic = "force-dynamic";

export default function Gallery() {
  const items = db.prepare("SELECT * FROM gallery ORDER BY id DESC LIMIT 200").all();
  return (
    <TwoColumns sidebar={<><AboutCard /><BadgesCard /></>}>
      <Window title="Gallery ~ stuff I like" last>
        {items.length ? (
          <div className="grid grid-cols-1 items-start gap-x-6 gap-y-8 p-5 pt-7 sm:grid-cols-2">
            {items.map((g, i) => <Polaroid key={g.id} src={g.src} caption={g.caption} className={`transition hover:rotate-0 hover:scale-105 ${i % 2 ? "rotate-1" : "-rotate-1"}`} />)}
          </div>
        ) : <p className="py-10 text-center font-medium text-muted">nothing here yet... check back soon ✧</p>}
      </Window>
    </TwoColumns>
  );
}
