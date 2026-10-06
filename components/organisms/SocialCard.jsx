import Window from "../molecules/Window";
import { linksSocialMedia } from "@/lib/content";
import Polaroid from "../molecules/Polaroid";

export default function SocialCard() {
  return (
    <Window title="Social Media" small center>
      <div className="grid gap-0.5 p-2">
        <Polaroid src="https://media1.tenor.com/m/9V8V6rWGEDsAAAAd/miku-hatsune-miku.gif" className="mb-3 -rotate-3" />
        {linksSocialMedia.map((l) => (
          <a key={l.name} href={l.url} className="flex items-center rounded-md border-2 gap-1 border-transparent px-2 py-1 leading-tight transition hover:border-brand-dark hover:bg-white">
            <b className="font-display text-base font-normal text-black underline decoration-dotted">{l.name} ↗</b> <span className="text-sm break-all text-muted">{l.username}</span>
          </a>
        ))}
      </div>
    </Window>
  );
}
