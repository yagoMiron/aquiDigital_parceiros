import Logo from "../Logo/Logo";
import NavLink from "./NavLink";
import ExitButton from "../ExitButton/ExitButton";
import { FunctionComponent } from "react";

import "./Nav.css";

interface NavProps {
  activeIndex: number;
}

const Navbar: FunctionComponent<NavProps> = ({ activeIndex }) => {
  const bolArray = [false, false, false, false];
  bolArray[activeIndex] = true;

  return (
    <nav className="navBar">
      <Logo />
      <ul>
        <NavLink
          name="Cadastro"
          link="/conta"
          icon="group"
          active={bolArray[0]}
        />
        <NavLink
          name="Propostas"
          link="/propostas"
          icon="document"
          active={bolArray[1]}
        />
        <NavLink
          name="Solicitações"
          link="/solicitacoes"
          icon="hands"
          active={bolArray[2]}
        />
        <NavLink
          name="Fomentos"
          link="/fomentos"
          icon="bank"
          active={bolArray[3]}
        />
      </ul>
      <ExitButton />
    </nav>
  );
};

export default Navbar;
