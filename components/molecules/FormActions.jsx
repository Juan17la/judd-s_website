import Button from "../atoms/Button";

// the submit button + the little status line every form has
export default function FormActions({ pending, label, pendingLabel, message, children }) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Button disabled={pending}>{pending ? pendingLabel : label}</Button>
      {children}
      <span role="status" className="text-sm font-bold text-accent">{message}</span>
    </div>
  );
}
