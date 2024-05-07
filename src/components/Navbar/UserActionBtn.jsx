import Link from "next/link";
import { authSession } from "@/libs/auth-libs";

const UserActionBtn = async () => {
  const user = await authSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/" : "/pages/signin";
  const actionLogin = user ? "Log In" : "Sign Up";
  const actionURLLogin = user ? "/api/auth/login" : "/api/auth/signup";
  return (
    <div className="flex justify-between gap-4">
      {user ? (
        <Link href={"/users/dashboard"} className="p-2">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="inline-block px-5 py-2 transition-all rounded-xl bg-color-secondary text-color-accent hover:bg-color-dark hover:text-color-primary">
        {actionLabel}
      </Link>
      <Link
        href={actionURLLogin}
        className="inline-block px-5 py-2 transition-all rounded-xl bg-color-secondary text-color-accent hover:bg-color-dark hover:text-color-primary">
        {actionLogin}
      </Link>
    </div>
  );
};

export default UserActionBtn;
