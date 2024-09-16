import Campo from "../components/Campo";
import Logo from "../components/Logo";

function Cadastro() {
  return (
    <section className="flex flex-col box-border min-h-screen background_section ">
      <header className="h-24 w-full bg-blue-950 items-center flex px-5">
        <Logo></Logo>
      </header>

      <main className="m-auto w-3/4 container_shadow blue_border rounded-md p-10 ">
        <form className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font_bold my-3">
            Cadastre Informações sobre a sua{" "}
            <strong className="border border-blue-950 yellow_bg">
              Instituição
            </strong>
          </h2>

          <Campo
            title="Nome da Instituição"
            type="text"
            placeholder="Nome da sua Instituição"
            length={64}
            required={true}
          ></Campo>

          <Campo
            title="CNPJ"
            type="text"
            placeholder="00.000.000/0000-00"
            length={18}
            required={true}
          ></Campo>

          <Campo
            title="Estado"
            type="text"
            placeholder="Sigla do seu estado"
            length={2}
            required={true}
          ></Campo>

          <Campo
            title="Cidade"
            type="text"
            placeholder="Nome da sua cidade"
            length={32}
            required={true}
          ></Campo>

          <Campo
            title="Endereço"
            type="text"
            placeholder="Rua, numero, bairro"
            length={128}
            required={true}
          ></Campo>

          <Campo
            title="E-mail"
            type="email"
            placeholder="Digite seu email"
            length={128}
            required={true}
          ></Campo>

          <Campo
            title="Telefone"
            type="tel"
            placeholder="(DDD)90000-0000"
            length={18}
            required={true}
          ></Campo>

          <input
            type="submit"
            value="Proxima Página"
            className="generic_button mt-5"
          />
        </form>
      </main>
    </section>
  );
}

export default Cadastro;
