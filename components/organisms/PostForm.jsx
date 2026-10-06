"use client";
import { useActionState, useEffect, useState } from "react";
import { createPost } from "@/lib/actions";
import FormActions from "../molecules/FormActions";
import Textarea from "../atoms/Textarea";

export default function PostForm() {
  const [state, action, pending] = useActionState(createPost, {});
  const [length, setLength] = useState(0);
  useEffect(() => { if (state.ok) setLength(0); }, [state]); // React empties the textarea after a post; the counter follows
  return (
    <form action={action} className="grid gap-3 p-4">
      <Textarea name="body" defaultValue={state.fields?.body} onChange={(e) => setLength(e.target.value.length)} maxLength={500} rows={3} required placeholder="what's happening?!" />
      <FormActions pending={pending} label="Post it" pendingLabel="Posting..." message={state.error ?? state.ok}>
        <span className="text-sm text-muted">{length}/500</span>
      </FormActions>
    </form>
  );
}
