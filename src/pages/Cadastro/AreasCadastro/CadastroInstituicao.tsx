import Campo from "../../../components/Campo";

function CadastroInstituicao() {
  return (
    <>
      <h2>
        1. Cadastre Informações sobre a sua <strong>Instituição</strong>
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
        title="E-mail"
        type="email"
        placeholder="Digite seu email"
        length={64}
        required={true}
      ></Campo>

      <Campo
        title="Telefone"
        type="tel"
        placeholder="(DDD)90000-0000"
        length={18}
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
        title="CEP"
        type="text"
        placeholder="00000-000"
        length={9}
        required={true}
      ></Campo>
    </>
  );
}

export default CadastroInstituicao;
