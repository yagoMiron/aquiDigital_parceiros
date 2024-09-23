import Navbar from "../../components/Navbar/Navbar";
import TableConstructor from "../../components/TableConstructor/TableConstructor";
import Cabecalho from "../../components/Cabeçalho/Cabecalho";
import "./Dashboard.css";

function Fomentos() {
  const tableFomentos = {
    Objeto: [
      "Titulo do Objeto1",
      "Titulo do Objeto2",
      "Titulo do Objeto3",
      "Titulo do Objeto4",
    ],
    Justificativa: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    ],
    "Publico Alvo": ["publico1", "publico2", "publico3", "publico4"],
    "Prazo de Execução": [
      "13/03/2024 - 13/07/2024",
      "11/03/2024 - 11/08/2024",
      "22/02/2024 - 22/06/2024",
      "14/01/2024 - 14/07/2024",
    ],
    Situação: ["Pendente", "Aprovado", "Finalizado", "Rejeitado"],
  };
  const btnFomentos = [
    ["Detalhes", "./"],
    ["Detalhes", "./"],
    ["Detalhes", "./"],
    ["Detalhes", "./"],
  ];
  return (
    <div className="page">
      <Navbar activeIndex={3} />
      <section>
        <Cabecalho title="Meus Fomentos" icon="bank" />
        <main>
          <div className="container">
            <h3>Editais Abertos:</h3>
            <div>
              <TableConstructor
                tableObj={tableFomentos}
                colunaBtn={btnFomentos}
              />
              <button className="addBtn">+ Termo de Fomento</button>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Fomentos;
