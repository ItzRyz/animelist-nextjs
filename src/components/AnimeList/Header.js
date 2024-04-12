import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-sm underline transition-all md:text-xl hover:text-indigo-500">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
