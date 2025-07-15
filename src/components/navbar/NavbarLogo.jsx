"use client";
import React from "react";

const NavbarLogo = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <h1 className="text-white text-2xl sm:hidden md:block">
        𝑨𝒏𝒖𝒓𝒂𝒈𝑲𝒖𝒄𝒉𝒆.dev
      </h1>
      <h1 className="text-white font-special font-extrabold text-4xl md:hidden sm:block">
        AK
      </h1>
    </div>
  );
};

export default NavbarLogo;
