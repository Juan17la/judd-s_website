import Prefs from "./Prefs";

// header image; a dark gradient at the bottom keeps the white title readable in both themes
export default function Banner() {
  return (
    <header className="relative flex h-56 items-center justify-center overflow-hidden rounded-t-2xl bg-brand text-center">
      <div aria-hidden="true" className="absolute inset-0 bg-[url('https://i.pinimg.com/originals/f8/fb/90/f8fb90452d47c229d2dbaaabaa0aa764.gif')] bg-cover bg-center" />
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-black/10 via-black/20 to-black/55" />
      <Prefs />
      <h1 className="relative -mt-6 px-4 text-4xl font-semibold tracking-tight text-white [text-shadow:0_2px_12px_rgb(0_0_0/0.35)] md:text-6xl">Judd&apos;s Webpage</h1>
    </header>
  );
}
