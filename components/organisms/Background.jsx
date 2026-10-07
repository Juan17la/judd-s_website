// light backdrop: pale base with the bg gif softly visible underneath
export default function Background() {
  return (
    <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-brand-pale bg-[url('/img/bg.gif')] bg-cover bg-center opacity-10 grayscale"></div>
  );
}
