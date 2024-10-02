import { FunctionComponent } from "react";

import { Link } from "react-router-dom";
import styles from "./NavLink.module.css";

interface NavProps {
  name: string;
  link: string;
  icon: "document" | "group" | "hands" | "bank";
  active: boolean;
}

const NavLink: FunctionComponent<NavProps> = ({ name, link, icon, active }) => {
  const classes =
    (active ? styles.active : "") +
    ` ${styles.icon} ${estiloIcone(icon, active)}`;

  return (
    <Link className={classes} to={link}>
      <p className={styles.title}>{name}</p>
    </Link>
  );
};

export default NavLink;

function estiloIcone(icon: string, active: boolean) {
  switch (icon) {
    case "document":
      return active ? styles.document_active : styles.document;
    case "group":
      return active ? styles.group_active : styles.group;
    case "hands":
      return active ? styles.hands_active : styles.hands;
    case "bank":
      return active ? styles.bank_active : styles.bank;
  }
}
