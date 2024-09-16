import { FunctionComponent } from "react";
import "../CSS/tabela.css";

interface TableProps {
  tableObj: { [chave: string]: string[] }; //tableObj é um objeto de arrays de strings
  colunaBtn?: string[][];
}

const TableConstructor: FunctionComponent<TableProps> = ({
  tableObj,
  colunaBtn,
}) => {
  const keys = Object.keys(tableObj);

  let header = "<tr >"; // abre a table row do header da tabela
  let arrRow = ["<tr>", "<tr>", "<tr>", "<tr>"]; //abre a tag de table row para as linhas de dados

  keys.forEach((item) => {
    header += "<th>" + item + "</th>\n"; //para cada chave cria um table header com o nome daquela chave
    tableObj[item].forEach((element, index) => {
      arrRow[index] += "<td>" + element + "</td>"; // para cada valor no array daquela chave crie um table data com o nome de cada valor em cada table row
    });
  });
  header += colunaBtn ? "<th></th>" : "";
  header += "</tr>"; //fecha a table row do header
  let btnIndex = 0;
  arrRow.forEach((_, index) => {
    arrRow[index] += colunaBtn
      ? `<td><a href="${colunaBtn[btnIndex][1]}"> + ${colunaBtn[btnIndex][0]} </a></td>`
      : "";
    btnIndex++;

    arrRow[index] += "</tr>"; //fecha a table row de cada linha de dados
  });

  return (
    <table
      className="w-full text-left text-blue-900"
      dangerouslySetInnerHTML={{
        __html: header + arrRow[0] + arrRow[1] + arrRow[2] + arrRow[3],
      }}
    ></table>
  );
};

export default TableConstructor;
