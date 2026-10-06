import TagList from "./TagList";

export default function TechBox({ title, items, className = "" }) {
  return (
    <div className={`rounded-md border-2 border-dashed border-brand-dark/60 bg-white/70 p-3 ${className}`}>
      <h3 className="mb-2 border-b-2 border-dashed border-brand-dark/40 pb-1.5 font-display text-base tracking-wide text-black">✦ {title}</h3>
      <TagList items={items} className="gap-2" />
    </div>
  );
}
