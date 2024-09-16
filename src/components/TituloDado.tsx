import { FunctionComponent } from "react";

interface dadoProps {
  chave: string;
  valor: string;
}

const TituloDado: FunctionComponent<dadoProps> = ({ chave, valor }) => {
  return (
    <>
      <span className="text-blue-900 text-lg w-1/2">
        <strong className="ml-6">{chave}:</strong> {valor}
      </span>
    </>
  );
};

export default TituloDado;
