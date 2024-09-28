import styles from "./Cabecalho.module.css";
import { FunctionComponent } from "react";

interface CabecalhoProps {
  title: string;
  icon: "document" | "group" | "hands" | "bank";
}

const Cabecalho: FunctionComponent<CabecalhoProps> = ({ title, icon }) => {
  let icone = estiloIcone(icon);

  return (
    <header className={styles.cabecalho}>
      <h3 className={icone}>{title}</h3>
      <div>
        <span>User_name</span>
      </div>
    </header>
  );
};

export default Cabecalho;

function estiloIcone(icon: string) {
  let icone: string;
  switch (icon) {
    case "document":
      icone = styles.document;
      break;
    case "group":
      icone = styles.group;
      break;
    case "hands":
      icone = styles.hands;
      break;
    case "bank":
      icone = styles.bank;
      break;
    default:
      icone = "";
      break;
  }

  return icone;
}
