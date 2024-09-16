import { FunctionComponent } from "react";
import "../CSS/svgBg.css";
import { Link } from "react-router-dom";

interface NavProps {
  name: string;
  link: string;
  icon: "document" | "group" | "hands" | "bank";
  active: boolean;
}

const NavAnchor: FunctionComponent<NavProps> = ({
  name,
  link,
  icon,
  active,
}) => {
  const classes =
    "rounded-2xl mx-2 svg_base " +
    (active
      ? "text-blue-950 svg_active "
      : "text-blue-300 hover:text-blue-950  ") +
    icon +
    (active ? "_active" : "");
  return (
    <>
      <Link className={classes} to={link}>
        <p className="m-1 mx-10 ml-12 font_bold">{name}</p>
      </Link>
    </>
  );
};

export default NavAnchor;
