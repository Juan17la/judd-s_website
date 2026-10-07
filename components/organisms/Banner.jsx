import Prefs from "./Prefs";

// image strength and the fade over it come from --bn-img / --bn-fade (lighter in the light theme)
export default function Banner() {
  return (
    <header className="relative flex h-56 items-center justify-center overflow-hidden rounded-t-xl border border-b-0 border-line bg-brand text-center">
      <div aria-hidden="true" style={{ opacity: "var(--bn-img)" }} className="absolute inset-0 bg-[url('https://media1.tenor.com/m/85r7Pk6D4DcAAAAd/rozen-maiden-black-angel.gif')] bg-cover bg-center grayscale-30" />
      <div aria-hidden="true" style={{ opacity: "var(--bn-fade)" }} className="absolute inset-0 bg-linear-to-b from-transparent to-brand-pale" />
      <Prefs />
      <div className="relative -mt-4 px-4">
        <h1 className="text-4xl font-bold tracking-tight text-hi [text-shadow:0_2px_14px_var(--color-brand-pale)] md:text-6xl">Judd&apos;s Webpage</h1>
      </div>
    </header>
  );
}
