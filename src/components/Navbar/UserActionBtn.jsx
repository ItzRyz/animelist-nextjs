import Link from "next/link";
import { authSession } from "@/libs/auth-libs";

const UserActionBtn = async () => {
  const user = await authSession();
  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  return (
    <div className="flex justify-between gap-4">
      {user ? (
        <Link href={"/users/dashboard"} className="py-2">
          Dashboard
        </Link>
      ) : null}
      <Link
        href={actionURL}
        className="inline-block px-8 py-2 transition-all rounded-xl bg-color-dark text-color-accent hover:bg-color-secondary hover:text-color-primary">
        {actionLabel}
      </Link>
    </div>
  );
};

export default UserActionBtn;
