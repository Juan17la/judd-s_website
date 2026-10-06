import Tape from "../atoms/Tape";

// A taped photo. Muted until you hover it. `children` = extra controls under the caption.
export default function Polaroid({ src, alt = "", caption, className = "rotate-2", children }) {
  return (
    <figure className={`relative border-2 border-brand-dark bg-white p-2 pb-1.5 shadow-soft ${className}`}>
      <Tape />
      <img src={src} alt={alt || caption || ""} loading="lazy" className="w-full saturate-50 transition hover:saturate-100" />
      {caption && <figcaption className="px-1 pt-2 pb-1 text-sm break-words">{caption}</figcaption>}
      {children}
    </figure>
  );
}
