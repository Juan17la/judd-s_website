import Tag from "../atoms/Tag";

export default function TagList({ items, className = "" }) {
  return <div className={`flex flex-wrap gap-1.5 ${className}`}>{items.map((t) => <Tag key={t}>{t}</Tag>)}</div>;
}
