import { Sun, Moon } from "@phosphor-icons/react/dist/ssr";
import { setPref } from "@/lib/actions";
import { prefs, T } from "@/lib/i18n";

const btn = "grid h-7 place-items-center rounded-lg px-2 text-xs font-semibold transition hover:bg-raise hover:text-hi";

// language + theme switches (server actions set a cookie)
export default async function Prefs() {
  const { lang, theme } = await prefs();
  const t = T[lang];
  return (
    <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-xl bg-brand/85 p-1 text-muted shadow-sm">
      {["en", "es"].map((l) => (
        <form key={l} action={setPref.bind(null, "lang", l)}>
          <button className={`${btn} ${l === lang ? "bg-raise text-hi" : ""}`} aria-pressed={l === lang} aria-label={`${t.language}: ${l}`}>{l.toUpperCase()}</button>
        </form>
      ))}
      <form action={setPref.bind(null, "theme", theme === "dark" ? "light" : "dark")}>
        <button className={btn} aria-label={t.theme}>{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</button>
      </form>
    </div>
  );
}
