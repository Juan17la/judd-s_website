// the green "J" square. Give it a size and a text size through className.
export default function Avatar({ src, className = "" }) {
  return (
    <div className={`grid place-items-center overflow-hidden border border-line bg-linear-to-br from-brand to-brand-mid font-display text-hi ${className}`}>
      {src ? <img src={src} alt="Jud" className="size-full object-cover" /> : "J"}
    </div>
  );
}
