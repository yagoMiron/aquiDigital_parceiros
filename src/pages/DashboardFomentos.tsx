import Navbar from "../components/Navbar";
import TableConstructor from "../components/TableConstructor";
import "../CSS/dashBoard_header.css";

function DashboardFomentos() {
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
    <div className="flex box-border min-h-screen">
      <Navbar activeIndex={3} />
      <section className="grow min-h-screen flex flex-col">
        <header className="flex justify-between h-28 items-center px-28">
          <h3 className="text-blue-900 font_bold text-2xl svgHuge bankSvg_huge p-px pl-12">
            Meus Fomentos
          </h3>
          <div>
            <span className="text-blue-900 font_bold">User_name</span>
          </div>
        </header>
        <main className="flex flex-col bg-slate-200 grow items-center py-12 gap-10">
          <div className="bg-white w-11/12 rounded-3xl px-10 py-8 shadow-lg flex flex-col">
            <h3 className="text-blue-900 font_bold text-3xl mb-6">
              Editais Abertos:
            </h3>
            <div className="flex flex-wrap">
              <TableConstructor
                tableObj={tableFomentos}
                colunaBtn={btnFomentos}
              />
              <button className="mx-auto bg-blue-900 rounded-3xl px-10 py-2 text-white font_bold mt-16 border-2 border-blue-900 hover:bg-white hover:text-blue-900 ">
                + Termo de Fomento
              </button>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default DashboardFomentos;
