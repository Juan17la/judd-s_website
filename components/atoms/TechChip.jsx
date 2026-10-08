import { Sparkle, CursorClick, Wind, Globe, PlugsConnected, Desktop, Watch, Microphone, Vibrate, FilmStrip, Code } from "@phosphor-icons/react/dist/ssr";
import { devicon, DARK_LOGOS } from "@/lib/devicon";

// techs devicon doesn't have
const GLYPHS = { "Claude Code": Sparkle, Cursor: CursorClick, Wails: Wind, CDNs: Globe, "API Client": PlugsConnected, Desktop, "Wear OS": Watch, "AI Dictation": Microphone, Haptics: Vibrate, FFmpeg: FilmStrip };

// a technology: its logo + name. `small` = compact chip for project cards.
export default function TechChip({ name, small }) {
  const src = devicon(name), Glyph = GLYPHS[name] ?? Code, size = small ? 14 : 18;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-lg bg-brand-light/70 text-hi transition duration-200 hover:-translate-y-px hover:bg-brand-light ${small ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-sm"}`}>
      {src
        ? <img src={src} alt="" width={size} height={size} loading="lazy" className={`object-contain ${DARK_LOGOS.has(name) ? "invert-dark" : ""}`} style={{ height: size, width: "auto", maxWidth: size * 2 }} />
        : <Glyph size={size} weight="duotone" aria-hidden="true" className="text-muted" />}
      {name}
    </span>
  );
}
