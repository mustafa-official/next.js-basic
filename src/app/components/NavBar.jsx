"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();
  console.log(pathName);
  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Meals",
      path: "/meals",
    },
   
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
  ];
  return (
    <nav className="flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold">Next Hero</h1>
      </Link>
      <ul className="flex items-center gap-4">
        {navLinks?.map((link) => (
          <Link
            className={`${
              pathName === link?.path && "font-bold text-violet-600"
            }`}
            href={link?.path}
            key={link?.title}
          >
            {link?.title}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
