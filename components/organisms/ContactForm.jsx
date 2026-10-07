"use client";
import { useActionState } from "react";
import { sendMessage } from "@/lib/actions";
import Field from "../molecules/Field";
import FormActions from "../molecules/FormActions";
import Input from "../atoms/Input";
import Textarea from "../atoms/Textarea";

export default function ContactForm({ t }) {
  const [state, action, pending] = useActionState(sendMessage, {});
  const typed = state.fields; // sent back with errors, so React's form reset doesn't wipe what was typed
  return (
    <form action={action} className="grid gap-3 p-4">
      <Field label={t.name}><Input name="name" defaultValue={typed?.name} required maxLength={80} placeholder="anon" /></Field>
      <Field label={t.email} hint={t.emailHint}><Input name="email" type="email" defaultValue={typed?.email} maxLength={120} placeholder="you@example.com" /></Field>
      <Field label={t.message}><Textarea name="body" defaultValue={typed?.body} required maxLength={2000} rows={4} placeholder={t.msgPh} /></Field>
      <FormActions pending={pending} label={t.send} pendingLabel={t.sending} message={state.error ?? state.ok} />
    </form>
  );
}
