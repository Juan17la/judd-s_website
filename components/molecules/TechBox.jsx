import TechChip from "../atoms/TechChip";

// one row of the stack card: category on the left, logo chips on the right
export default function TechBox({ title, items }) {
  return (
    <div className="grid gap-2 px-4 py-3.5 sm:grid-cols-[12rem_1fr] sm:items-center">
      <h3 className="text-sm font-medium text-muted">{title}</h3>
      <div className="flex flex-wrap gap-2">{items.map((n) => <TechChip key={n} name={n} />)}</div>
    </div>
  );
}
