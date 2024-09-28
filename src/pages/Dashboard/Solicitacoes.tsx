import Navbar from "../../components/Navbar/Navbar";
import TableConstructor from "../../components/TableConstructor/TableConstructor";
import Cabecalho from "../../components/Cabeçalho/Cabecalho";
import "./Dashboard.css";

function Solicitacoes() {
  const tableCooperacao = {
    Titulo: ["Titulo1", "Titulo2", "Titulo3", "Titulo4"],
    Descrição: [
      "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    ],
    Data: ["13/03/2024", "11/03/2024", "22/02/2024", "14/01/2024"],
  };
  const btnCooperacao = [
    ["Relatório", "./"],
    ["Relatório", "./"],
    ["Relatório", "./"],
    ["Relatório", "./"],
  ];
  return (
    <div className="page">
      <Navbar activeIndex={2} />
      <section>
        <Cabecalho title="Minhas Solicitações" icon="hands" />
        <main>
          <div className="container">
            <h3>Cooperação Técnica:</h3>
            <div>
              <TableConstructor
                tableObj={tableCooperacao}
                colunaBtn={btnCooperacao}
              />
              <button className="addBtn">+ Termo de Cooperação Técnica</button>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Solicitacoes;
