import React from "react";
import NavLink from "../UI/NavLink/NavLink";

const NavLinks = () => {
  const navList = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Shop",
      url: "/shop",
    },
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];
  return (
    <>
      {navList.map((navItem) => (
        <NavLink key={navItem.name} href={navItem.url}>
          {navItem.name}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinks;
