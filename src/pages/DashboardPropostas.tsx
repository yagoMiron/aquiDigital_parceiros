import Navbar from "../components/Navbar";
import TableConstructor from "../components/TableConstructor";
import "../CSS/dashBoard_header.css";
import "../CSS/svgBg.css";

function DashboardPropostas() {
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
    <div className="flex box-border min-h-screen">
      <Navbar activeIndex={1} />
      <section className="grow min-h-screen flex flex-col">
        <header className="flex justify-between h-28 items-center px-28">
          <h3 className="text-blue-900 font_bold text-2xl svgHuge documentSvg_huge pl-12">
            Minhas Propostas
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
                tableObj={tableEditaisAbertos}
                colunaBtn={btnEditaisAbertos}
              />
            </div>
          </div>

          <div className="bg-white w-11/12 rounded-3xl px-10 py-8 shadow-lg flex flex-col">
            <h3 className="text-blue-900 font_bold text-3xl mb-6">
              Minhas propostas:
            </h3>
            <div className="flex flex-wrap">
              <TableConstructor tableObj={tableMinhasPropostas} />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default DashboardPropostas;
