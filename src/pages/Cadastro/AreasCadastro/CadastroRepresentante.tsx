import Campo from "../../../components/Campo";

function CadastroRepresentante() {
  return (
    <>
      <h2>
        2. Cadastre Informações sobre o <strong>Representante Legal</strong> da
        Instituição
      </h2>
      <Campo
        title="Nome do Representante Legal"
        type="text"
        placeholder="Nome completo do Representante"
        length={64}
        required={true}
      ></Campo>

      <Campo
        title="CPF"
        type="text"
        placeholder="000.000.000-00"
        length={14}
        required={true}
      ></Campo>

      <Campo
        title="RG/Órgão"
        type="text"
        placeholder="00.000.000 SSP/SP"
        length={18}
        required={true}
      ></Campo>

      <Campo
        title="E-mail"
        type="email"
        placeholder="representante@gmail.com"
        length={64}
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

export default CadastroRepresentante;
