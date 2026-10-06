export default function Banner() {
  return (
    <header className="relative flex h-66 items-center justify-center overflow-hidden rounded-t-lg border-3 border-brand-deep bg-brand-pale bg-[url('https://media1.tenor.com/m/85r7Pk6D4DcAAAAd/rozen-maiden-black-angel.gif')] bg-cover bg-center text-center md:h-66 md:border-b-0">
      {/* soft light overlay so the teto banner stays visible but the title reads professionally */}
      <div aria-hidden="true" className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black-deep/45" />
      <div className="relative -mt-4 px-4">
        <h1 className="font-display text-4xl leading-none tracking-wide text-white/80 [text-shadow:-2px_-3px_6px_#3a6b8a] md:text-7xl"><span aria-hidden="true" className="hidden md:inline">- </span>Judd's Webpage<span aria-hidden="true" className="hidden md:inline"> -</span></h1>
      </div>
    </header>
  );
}
