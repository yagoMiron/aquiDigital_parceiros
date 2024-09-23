import { FunctionComponent } from "react";

import { Link } from "react-router-dom";
import "./Nav.css";

interface NavProps {
  name: string;
  link: string;
  icon: "document" | "group" | "hands" | "bank";
  active: boolean;
}

const NavLink: FunctionComponent<NavProps> = ({ name, link, icon, active }) => {
  const classes =
    (active
      ? "text-blue-950 svg_active "
      : "text-blue-300 hover:text-blue-950  ") +
    icon +
    (active ? "_active" : "");
  return (
    <Link className={classes} to={link}>
      <p className="m-1 mx-10 ml-12 font-bold">{name}</p>
    </Link>
  );
};

export default NavLink;
