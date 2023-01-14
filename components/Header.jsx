import { logout } from "@/utils/auth";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState();
  useEffect(() => {
    const cookie = getCookie("user");
    setUser(JSON.parse(cookie));
  }, []);
  return (
    <div className="flex justify-between">
      <h2 className="font-bold text-teal-600 text-lg">
        <Link href="/">
          <span>Monoma</span>
        </Link>
      </h2>
      {!!user && (
        <div className="dropdown inline-block relative">
          <button className="hover:bg-gray-100 text-gray-700 font-semibold px-4 rounded inline-flex items-center">
            <span className="mr-1">{user.email}</span>
            <svg
              className="fill-gray-700 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 shadow-sm w-full">
            <li>
              <a
                className=" items-center rounded-b bg-gray-50 hover:bg-gray-100 py-2 px-4 block whitespace-no-wrap"
                href="#"
                onClick={logout}
              >
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      )}
      <style jsx>{`
        .dropdown:hover .dropdown-menu {
          display: block;
        }
      `}</style>
    </div>
  );
}
