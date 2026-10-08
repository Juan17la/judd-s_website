"use client";
import { useActionState, useState } from "react";
import { addGalleryItem } from "@/lib/actions";
import FormActions from "../molecules/FormActions";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";

export default function GalleryForm() {
  const [state, action, pending] = useActionState(addGalleryItem, {});
  const [preview, setPreview] = useState("");
  // React resets the form after every submit; keep the typed URL and its preview
  const [seen, setSeen] = useState(state);
  if (state !== seen) { setSeen(state); if (state.ok || state.error) setPreview(state.fields?.url ?? ""); }

  return (
    <form action={action} className="grid gap-3 p-4">
      <Input name="url" required type="url" defaultValue={state.fields?.url} onChange={(e) => setPreview(e.target.value.trim())} placeholder="https://… image URL" />
      {preview && <img src={preview} alt="preview" className="max-h-52 w-fit border border-line" />}
      <Textarea name="caption" defaultValue={state.fields?.caption} maxLength={300} rows={2} placeholder="Caption" />
      <FormActions pending={pending} label="Add to gallery" pendingLabel="Adding..." message={state.error ?? state.ok} />
    </form>
  );
}
