"use client";
import Button from "../atoms/Button";

// `action` is a server action that reads the hidden `id`
export default function DeleteButton({ action, id }) {
  return (
    <form action={action} onSubmit={(e) => !confirm("Delete this for good?") && e.preventDefault()} className="mt-2">
      <input type="hidden" name="id" value={id} />
      <Button size="sm">delete</Button>
    </form>
  );
}
