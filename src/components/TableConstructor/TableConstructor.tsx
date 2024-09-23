import { FunctionComponent } from "react";
import "./tabela.css";

interface TableProps {
  tableObj: { [chave: string]: string[] }; //tableObj é um objeto de arrays de strings
  colunaBtn?: string[][];
}

const TableConstructor: FunctionComponent<TableProps> = ({
  tableObj,
  colunaBtn,
}) => {
  const keys = Object.keys(tableObj);

  let header = ""; // abre a table row do header da tabela
  let arrRow = ["", "", "", ""]; //abre a tag de table row para as linhas de dados

  keys.forEach((item) => {
    header += "<th>" + item + "</th>\n"; //para cada chave cria um table header com o nome daquela chave
    tableObj[item].forEach((element, index) => {
      arrRow[index] += "<td>" + element + "</td>"; // para cada valor no array daquela chave crie um table data com o nome de cada valor em cada table row
    });
  });
  header += colunaBtn ? "<th></th>" : ""; //se existir coluna de botões crie um header vazio para botões

  if (colunaBtn) {
    //se existir coluna de botões, coloque um botão no final de cada row
    colunaBtn.forEach((btn, index) => {
      arrRow[index] += `<td><a href="${btn[1]}">+ ${btn[0]}</a></td>`;
    });
  }

  return (
    <table>
      <thead
        dangerouslySetInnerHTML={{
          __html: header,
        }}
      ></thead>
      <tbody
        dangerouslySetInnerHTML={{
          __html: arrRow[0],
        }}
      ></tbody>
      <tbody
        dangerouslySetInnerHTML={{
          __html: arrRow[1],
        }}
      ></tbody>
      <tbody
        dangerouslySetInnerHTML={{
          __html: arrRow[2],
        }}
      ></tbody>
      <tbody
        dangerouslySetInnerHTML={{
          __html: arrRow[3],
        }}
      ></tbody>
    </table>
  );
};

export default TableConstructor;
