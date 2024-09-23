import Navbar from "../../components/Navbar/Navbar";
import TableConstructor from "../../components/TableConstructor/TableConstructor";
import Cabecalho from "../../components/Cabeçalho/Cabecalho";
import "./Dashboard.css";

function Propostas() {
  const tableEditaisAbertos = {
    Titulo: ["Titulo1", "Titulo2", "Titulo3", "Titulo4"],
    Descrição: [
      "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    ],
    Data: ["13/03/2024", "11/03/2024", "22/02/2024", "14/01/2024"],
  };
  const btnEditaisAbertos = [
    ["Proposta", "./"],
    ["Proposta", "./"],
    ["Proposta", "./"],
    ["Proposta", "./"],
  ];

  const tableMinhasPropostas = {
    "Titulo Edital": ["Titulo1", "Titulo2", "Titulo3", "Titulo4"],
    "Titulo Proposta": [
      "Titulo Edital 1",
      "Titulo Proposta 2",
      "Titulo Proposta 3",
      "Titulo Proposta 4",
    ],
    Descrição: [
      "A expressão Lorem ipsum em design gráfico e editoração é um texto padrão em latim utilizado na produção gráfica para preencher os espaços de texto em publicações para testar e ajustar aspectos visuais antes de utilizar conteúdo real",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    ],
    Situação: ["Pendente", "Aceita", "Finalizado", "Rejeitado"],
    Data: ["13/03/2024", "11/03/2024", "22/02/2024", "14/01/2024"],
  };

  return (
    <div className="page">
      <Navbar activeIndex={1} />
      <section>
        <Cabecalho title="Minhas Propostas" icon="document" />
        <main>
          <div className="container">
            <h3>Editais Abertos:</h3>
            <div>
              <TableConstructor
                tableObj={tableEditaisAbertos}
                colunaBtn={btnEditaisAbertos}
              />
            </div>
          </div>

          <div className="container">
            <h3>Minhas propostas:</h3>
            <div>
              <TableConstructor tableObj={tableMinhasPropostas} />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Propostas;
