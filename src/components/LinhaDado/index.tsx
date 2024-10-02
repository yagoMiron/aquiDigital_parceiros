import { FunctionComponent } from "react";
import styles from "./LinhaDado.module.css";

interface dadoProps {
  chave: string;
  valor: string;
}

const LinhaDado: FunctionComponent<dadoProps> = ({ chave, valor }) => {
  return (
    <>
      <span className={styles.linhaDado}>
        <strong>{chave}:</strong> {valor}
      </span>
    </>
  );
};

export default LinhaDado;
