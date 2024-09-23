import "./Cabecalho.css";
import { FunctionComponent } from "react";

interface CabecalhoProps {
  title: string;
  icon: "document" | "group" | "hands" | "bank";
}

const Cabecalho: FunctionComponent<CabecalhoProps> = ({ title, icon }) => {
  return (
    <header className="cabecalho">
      <h3 className={icon + "Svg_huge"}>{title}</h3>
      <div>
        <span>User_name</span>
      </div>
    </header>
  );
};

export default Cabecalho;
