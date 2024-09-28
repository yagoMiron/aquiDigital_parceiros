import Campo from "../../Campo/Campo";
import LinhaDado from "../../LinhaDado/LinhaDado";
import "../ModalForm.css";

const EditInstituicao = () => {
  return (
    <form action="" className="formModal">
      <h2>Editar dados da Instituição</h2>
      <div className="camposDados">
        <hr />
        <div className="gridCampos">
          <LinhaDado chave="Nome da Instituição" valor="Nome da Instituição" />
          <LinhaDado chave="CNPJ" valor="CNPJ" />
        </div>
        <hr />
        <div className="gridCampos">
          <Campo
            title="Email"
            type="text"
            placeholder="email_do_membro@email.com"
            length={48}
            required={true}
          ></Campo>
          <Campo
            title="Telefone"
            type="text"
            placeholder="(00)00000-0000"
            length={15}
            required={true}
          ></Campo>
          <Campo
            title="Endereço"
            type="text"
            placeholder="Rua, numero, bairro"
            length={64}
            required={true}
          ></Campo>
          <Campo
            title="Cidade"
            type="text"
            placeholder="Cidade"
            length={32}
            required={true}
          ></Campo>
          <Campo
            title="Estado"
            type="text"
            placeholder="Estado"
            length={32}
            required={true}
          ></Campo>
          <Campo
            title="CEP"
            type="text"
            placeholder="00000-000"
            length={9}
            required={true}
          ></Campo>
        </div>
        <hr />
      </div>

      <input type="submit" value="+ Editar Dados" />
    </form>
  );
};

export default EditInstituicao;
