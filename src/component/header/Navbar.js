import React, { useState } from "react";
import { NavItems } from "./NavLink";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const NavJson = NavItems.map(({ title, url }, index) => {
    return (
      <NavLink to={url} key={index} onClick={() => setToggle(false)}>
        {title}
      </NavLink>
    );
  });

  const toggleOnClick = () => {
    setToggle(!toggle);
  };
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h4>React</h4>
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleOnClick}>
        <GiHamburgerMenu className={toggle ? "hambur" : "cancel"} />
      </div>

      <div
        id={toggle ? "show" : "hide"}
        className={toggle ? "menu-list" : "menu-list close"}
      >
        {NavJson}
      </div>
    </nav>
  );
}

export default Navbar;
