import React from "react";
import { Link, useNavigate } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/home" },
  { name: "Dashboard", href: "/dashboard" },
];

export const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout = () =>{
    localStorage.removeItem("userKey");
    navigate('/')
  }
  return (
    <div className="px-6 pt-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href}>
              <span className="text-sm font-semibold leading-6 text-gray-900">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <span onClick={handleLogout} className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer">
            Log out <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </nav>
    </div>
  );
};
