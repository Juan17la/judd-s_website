// A framed image. `imgClass` = extra classes for the <img>, `children` = extra controls under the caption.
export default function Polaroid({ src, alt = "", caption, className = "", imgClass = "", children }) {
  return (
    <figure className={`overflow-hidden rounded-xl bg-brand-light/50 p-1.5 ${className}`}>
      <img src={src} alt={alt || caption || ""} loading="lazy" referrerPolicy="no-referrer" className={`w-full rounded-lg ${imgClass}`} />
      {caption && <figcaption className="px-1 pt-2 pb-1 text-sm break-words text-muted">{caption}</figcaption>}
      {children}
    </figure>
  );
}
