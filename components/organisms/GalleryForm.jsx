"use client";
import { useActionState, useEffect, useRef, useState } from "react";
import { addGalleryItem } from "@/lib/actions";
import FormActions from "../molecules/FormActions";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";

export default function GalleryForm() {
  const [state, action, pending] = useActionState(addGalleryItem, {});
  const [preview, setPreview] = useState("");
  const fileInput = useRef(null);

  // Ctrl+V anywhere on the page: put the pasted image into the file input so the form sends it
  useEffect(() => {
    const onPaste = (e) => {
      const file = [...(e.clipboardData?.files ?? [])].find((f) => f.type.startsWith("image/"));
      if (!file) return;
      const files = new DataTransfer();
      files.items.add(file);
      fileInput.current.files = files.files;
      setPreview(URL.createObjectURL(file));
    };
    document.addEventListener("paste", onPaste);
    return () => document.removeEventListener("paste", onPaste);
  }, []);

  // React clears the file input after every submit, so the preview goes too (a typed URL stays)
  useEffect(() => { if (state.ok || state.error) setPreview(state.fields?.url ?? ""); }, [state]);

  return (
    <form action={action} className="grid gap-3 p-4">
      <Input name="url" defaultValue={state.fields?.url} onChange={(e) => setPreview(e.target.value.trim())} placeholder="https://… image URL" />
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <input ref={fileInput} name="file" type="file" accept="image/png,image/jpeg,image/gif,image/webp" onChange={(e) => setPreview(e.target.files[0] ? URL.createObjectURL(e.target.files[0]) : "")} />
        <span className="text-muted">or press Ctrl+V to paste a copied image anywhere on this page</span>
      </div>
      {preview && <img src={preview} alt="preview" className="max-h-52 w-fit border-2 border-brand-dark" />}
      <Textarea name="caption" defaultValue={state.fields?.caption} maxLength={300} rows={2} placeholder="silly comment ✧" />
      <FormActions pending={pending} label="Add to gallery" pendingLabel="Adding..." message={state.error ?? state.ok} />
    </form>
  );
}
