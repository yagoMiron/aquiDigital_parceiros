import Campo from "../../Campo/Campo";
import LinhaDado from "../../LinhaDado/LinhaDado";
import "../ModalForm.css";

const EditMembro = () => {
  return (
    <form action="" className="formModal">
      <h2>Editar dados do Membro</h2>
      <div className="camposDados">
        <hr />
        <div className="gridCampos">
          <LinhaDado chave="Nome" valor="Nome do Membro" />
          <LinhaDado chave="CPF" valor="CPF" />
          <LinhaDado chave="RG/Órgão" valor="RG" />
        </div>
        <hr />
        <div className="gridCampos">
          <Campo
            title="Cargo"
            type="text"
            placeholder="Cargo"
            length={32}
            required={true}
          ></Campo>
          <Campo
            title="Email"
            type="text"
            placeholder="email_do_membro@email.com"
            length={48}
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
      <div className="gridCampos">
        <input type="submit" value="+ Editar Dados" />
        <button className="removeMember"> - Excluir Membro</button>
      </div>
    </form>
  );
};

export default EditMembro;
