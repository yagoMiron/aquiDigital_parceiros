import Logo from "./Logo";
import NavAnchor from "./NavAnchor";
import ExitButton from "./ExitButton";
import { FunctionComponent } from "react";

interface NavProps {
  activeIndex: number;
}

const Navbar: FunctionComponent<NavProps> = ({ activeIndex }) => {
  const bolArray = [false, false, false, false];
  bolArray[activeIndex] = true;

  return (
    <nav className="bg-blue-950 w-56 min-h-screen p-4 pt-8 flex flex-col gap-20 items-center justify-items-center">
      <Logo />
      <ul className="gap-4 flex flex-col grow">
        <NavAnchor
          name="Cadastro"
          link="/dashboard_cadastro"
          icon="group"
          active={bolArray[0]}
        />
        <NavAnchor
          name="Propostas"
          link="/dashboard_propostas"
          icon="document"
          active={bolArray[1]}
        />
        <NavAnchor
          name="Solicitações"
          link="/dashboard_solicitacoes"
          icon="hands"
          active={bolArray[2]}
        />
        <NavAnchor name="Fomentos" link="/dashboard_fomentos" icon="bank" active={bolArray[3]} />
      </ul>
      <ExitButton />
    </nav>
  );
};

export default Navbar;
