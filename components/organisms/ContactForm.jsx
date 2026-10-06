"use client";
import { useActionState } from "react";
import { sendMessage } from "@/lib/actions";
import Field from "../molecules/Field";
import FormActions from "../molecules/FormActions";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendMessage, {});
  const typed = state.fields; // sent back with errors, so React's form reset doesn't wipe what was typed
  return (
    <form action={action} className="grid gap-3 p-4">
      <Field label="Your name"><Input name="name" defaultValue={typed?.name} required maxLength={80} placeholder="anon" /></Field>
      <Field label="Email" hint="(optional, only if you want a reply)"><Input name="email" type="email" defaultValue={typed?.email} maxLength={120} placeholder="you@example.com" /></Field>
      <Field label="Message"><Textarea name="body" defaultValue={typed?.body} required maxLength={2000} rows={4} placeholder="say something nice (or silly) ✧" /></Field>
      <FormActions pending={pending} label="Send it ♥" pendingLabel="Sending..." message={state.error ?? state.ok} />
    </form>
  );
}
