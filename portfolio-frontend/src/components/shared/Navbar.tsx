"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookie from "js-cookie";
import ThemeToggle from "./themeToggle";


const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const token = Cookie.get("accessToken");

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  const handleLogout = () => {
    Cookie.remove("accessToken");
    signOut();
  };


  return (
    <nav className="flex items-center sticky  justify-between p-4 border-b container mx-auto">
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-bold">NoobWork</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${pathname === href
              ? "dark:text-red-500 text-red-500 font-bold "
              : "dark:text-white hover:text-green-700"
              }`}
          >
            {label}

          </Link>
        ))}
      </div>

      <div>  
      <ThemeToggle/>
        {session || token ? (
          <button
            onClick={handleLogout}
            className="border font-bold border-red-500 text-red-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition duration-200"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="border  font-bold    border-green-500 text-green-500 px-5 py-2 rounded-full hover:bg-red-500 hover:text-white transition duration-200"
          >
            Login
          </Link>
          
        )}


     
      </div>
      
    </nav>
  );
};

export default Navbar;
