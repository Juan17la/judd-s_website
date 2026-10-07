// A framed photo, muted until hovered. `children` = extra controls under the caption.
export default function Polaroid({ src, alt = "", caption, className = "", children }) {
  return (
    <figure className={`overflow-hidden rounded-lg border border-line bg-surface p-1.5 ${className}`}>
      <img src={src} alt={alt || caption || ""} loading="lazy" className="w-full rounded-md grayscale-60 transition hover:grayscale-0" />
      {caption && <figcaption className="px-1 pt-2 pb-1 text-sm break-words">{caption}</figcaption>}
      {children}
    </figure>
  );
}
