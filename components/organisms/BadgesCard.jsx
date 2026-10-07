import Window from "../molecules/Window";
import Stamp from "../atoms/Stamp";

export default function BadgesCard({ t }) {
  return (
    <Window title={t.badges} small center last>
      <div className="flex flex-wrap justify-center gap-1.5 p-2">
        {["Debian Old Man"].map((b) => <Stamp key={b}>{b}</Stamp>)}
      </div>
    </Window>
  );
}
