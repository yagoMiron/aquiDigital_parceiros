import Navbar from "../components/Navbar";
import TituloDado from "../components/TituloDado";
import EditButton from "../components/EditButton";
import "../CSS/dashBoard_header.css";
import "../CSS/svgBg.css";

function DashboardCadastro() {
  return (
    <div className="flex box-border min-h-screen">
      <Navbar activeIndex={0} />
      <section className="grow min-h-screen flex flex-col">
        <header className="flex justify-between h-28 items-center px-28">
          <h3 className="text-blue-900 font_bold text-2xl svgHuge groupSvg_huge pl-12">
            Meu Cadastro
          </h3>
          <div>
            <span className="text-blue-900 font_bold">User_name</span>
          </div>
        </header>
        <main className="flex flex-col bg-slate-200 grow items-center py-12 gap-10">
          <div className="bg-white w-11/12 rounded-3xl px-10 py-8 shadow-lg flex flex-col">
            <h3 className="text-blue-900 font_bold text-3xl mb-6">
              Dados da Instituição:
            </h3>
            <div className="flex flex-wrap">
              <TituloDado chave="Nome" valor="Nome_Representante" />
              <TituloDado chave="CNPJ" valor="00.000.000/0000-00" />
              <TituloDado chave="Email" valor="instituicao@gmail.com" />
              <TituloDado chave="Telefone" valor="(00)00000-0000" />
              <hr className="w-full h-2 mt-2" />
              <TituloDado chave="Endereço" valor="Rua, numero, bairro" />
              <TituloDado chave="Cidade" valor="Cidade" />
              <TituloDado chave="Estado" valor="Estado" />
              <TituloDado chave="CEP" valor="00000-000" />
              <hr className="w-full h-2 mt-2" />
              <TituloDado chave="Banco" valor="Banco do Brasil" />
              <TituloDado chave="Agencia" valor="0000" />
              <TituloDado chave="Conta Corrente" valor="000000" />
            </div>
            <EditButton />
          </div>

          <div className="bg-white w-11/12 rounded-3xl px-10 py-8 shadow-lg flex flex-col">
            <h3 className="text-blue-900 font_bold text-3xl mb-6">
              Dados do Representante:
            </h3>
            <div className="flex flex-wrap">
              <TituloDado chave="Nome" valor="Nome_Representante" />
              <TituloDado chave="Cargo" valor="Presidente" />
              <TituloDado chave="CPF" valor="000.000.000-00" />
              <TituloDado chave="RG/Órgão" valor="00.000.000 SSP/SP" />
              <TituloDado chave="Email" valor="representante@gmail.com" />
              <TituloDado chave="CEP" valor="00000-000" />
              <hr className="w-full h-2 mt-2" />
              <TituloDado chave="Endereço" valor="Rua, numero, bairro" />
              <TituloDado chave="Cidade" valor="Cidade" />
              <TituloDado chave="Estado" valor="Estado" />
            </div>
            <EditButton />
          </div>

          <button className="mx-auto bg-blue-900 rounded-3xl px-10 py-2 text-lg mt-8 text-white font_bold border-2 border-blue-900 hover:bg-white hover:text-blue-900 ">
            + Adicionar Membro
          </button>
        </main>
      </section>
    </div>
  );
}

export default DashboardCadastro;
