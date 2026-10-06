"use client";
import { useActionState } from "react";
import { login } from "@/lib/actions";
import Field from "../molecules/Field";
import FormActions from "../molecules/FormActions";
import Input from "../atoms/Input";

export default function LoginForm() {
  const [state, action, pending] = useActionState(login, {});
  return (
    <form action={action} className="grid gap-3 p-4">
      <Field label="Username"><Input name="user" autoComplete="username" required /></Field>
      <Field label="Password"><Input name="password" type="password" autoComplete="current-password" required /></Field>
      <FormActions pending={pending} label="Enter" pendingLabel="Checking..." message={state.error} />
    </form>
  );
}
