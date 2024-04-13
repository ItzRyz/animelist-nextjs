import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="text-xl font-bold md:text-2xl text-color-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link
          href={linkHref}
          className="text-xl underline transition-all text-color-primary md:text-lg hover:text-color-accent">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
