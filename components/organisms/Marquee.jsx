const TEXT = "ᓵ⚍ℸ ̣ t⍑ᒷ !¡╎ iリt𝙹 ꖎᔑ∷⊣ ᓵ⚍ℸ ̣ t⍑ᒷ !¡╎ iリt𝙹 ꖎᔑ∷⊣ ᓵ⚍ℸ ̣ t⍑ᒷ !¡╎ iリt𝙹 ꖎᔑ∷⊣ ᓵ⚍ℸ ̣ t⍑ᒷ !¡╎ iリt𝙹 ꖎᔑ∷⊣ ᓵ⚍ℸ ̣ t⍑ᒷ !¡╎ iリt𝙹 ꖎᔑ∷⊣ ᓵ⚍ℸ ̣ t⍑ᒷ !¡╎ iリt𝙹 ꖎᔑ∷⊣ ᓵ⚍ℸ ̣ t⍑ᒷ !¡╎ iリt𝙹 ꖎᔑ∷⊣ ᓵ⚍ℸ ̣ t⍑ᒷ !¡╎ iリt𝙹 ꖎᔑ∷⊣ ᓵ⚍ℸ ̣ t⍑ᒷ !¡╎ iリt𝙹 ꖎᔑ∷⊣ ᓵ⚍ℸ ̣ t⍑ᒷ !¡╎ iリt𝙹 ꖎᔑ∷⊣ ᓵ⚍ℸ ̣ t⍑ᒷ !¡╎ iリt𝙹 ꖎᔑ∷⊣ ᓵ⚍ℸ ̣ t⍑ᒷ !¡╎ iリt𝙹 ꖎᔑ∷⊣ ";

export default function Marquee() {
  return (
    <div className="overflow-hidden border-b-3 border-white/40 bg-brand-dark py-1.5 text-sm font-medium whitespace-nowrap text-black-light">
      <span className="inline-block animate-marquee motion-reduce:animate-none">{TEXT}{TEXT}</span>
    </div>
  );
}
