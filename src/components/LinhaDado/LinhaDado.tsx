import { FunctionComponent } from "react";
import "./LinhaDado.css";

interface dadoProps {
  chave: string;
  valor: string;
}

const LinhaDado: FunctionComponent<dadoProps> = ({ chave, valor }) => {
  return (
    <>
      <span className="linhaDado">
        <strong>{chave}:</strong> {valor}
      </span>
    </>
  );
};

export default LinhaDado;
