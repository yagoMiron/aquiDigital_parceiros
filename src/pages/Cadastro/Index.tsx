import Campo from "../../components/Campo/Campo";
import Logo from "../../components/Logo/Logo";
import "./Cadastro.css";

function Cadastro() {
  return (
    <section className="cadastroPg">
      <header>
        <Logo />
      </header>

      <main>
        <form className="formCadastro">
          <h2>
            Cadastre Informações sobre a sua <strong>Instituição</strong>
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

          <input type="submit" value="Proxima Página" />
        </form>
      </main>
    </section>
  );
}

export default Cadastro;
