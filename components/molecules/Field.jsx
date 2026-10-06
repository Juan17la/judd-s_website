// label + input/textarea
export default function Field({ label, hint, children }) {
  return (
    <label className="grid gap-1 text-sm font-bold">
      <span>{label} {hint && <span className="font-normal text-muted">{hint}</span>}</span>
      {children}
    </label>
  );
}
