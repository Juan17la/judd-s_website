import { LockKey } from "@phosphor-icons/react/dist/ssr";
import { redirect } from "next/navigation";
import Window from "@/components/molecules/Window";
import LoginForm from "@/components/organisms/LoginForm";
import { isAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function LoginPage() {
  if (await isAdmin()) redirect("/admin");
  return <div className="mx-auto max-w-md"><Window title="Login" icon={LockKey} last><LoginForm /></Window></div>;
}
