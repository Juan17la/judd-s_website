import { GithubLogo, LinkedinLogo, XLogo, InstagramLogo, ShareNetwork, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Window from "../molecules/Window";
import { linksSocialMedia } from "@/lib/content";
import Polaroid from "../molecules/Polaroid";

const ICONS = { Github: GithubLogo, LinkedIn: LinkedinLogo, X: XLogo, Instagram: InstagramLogo };

export default function SocialCard({ title }) {
  return (
    <Window title={title} icon={ShareNetwork} small>
      <div className="grid gap-0.5 p-2">
        <Polaroid src="https://i.pinimg.com/736x/da/9f/82/da9f8225b030625ce1a7a88d77435d5d.jpg" className="mb-3" />
        {linksSocialMedia.map((l) => {
          const Icon = ICONS[l.name];
          return (
            <a key={l.name} href={l.url} className="flex items-center gap-2 rounded-lg px-2 py-1.5 leading-tight transition hover:bg-raise">
              <Icon size={18} weight="duotone" className="shrink-0 text-accent" aria-hidden="true" />
              <span className="min-w-0">
                <b className="flex items-center gap-1 text-sm font-semibold text-hi">{l.name}<ArrowUpRight size={12} aria-hidden="true" /></b>
                <span className="block text-xs break-all text-muted">{l.username}</span>
              </span>
            </a>
          );
        })}
      </div>
    </Window>
  );
}
