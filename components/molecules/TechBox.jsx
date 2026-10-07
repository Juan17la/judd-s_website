import TagList from "./TagList";

export default function TechBox({ title, items, className = "" }) {
  return (
    <div className={`rounded-lg border border-line bg-surface p-3 ${className}`}>
      <h3 className="mb-2 border-b border-line pb-1.5 text-sm font-semibold tracking-wide text-hi">{title}</h3>
      <TagList items={items} className="gap-2" />
    </div>
  );
}
