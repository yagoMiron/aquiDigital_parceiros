import Campo from "../../Campo";
import styles from "../ModalForm.module.css";

const AddMembro = () => {
  return (
    <form action="" className={styles.formModal}>
      <h2>Adicione um novo Membro</h2>
      <div className={styles.camposDados}>
        <div className={styles.gridCampos}>
          <Campo
            title="Nome"
            type="text"
            placeholder="Nome do membro"
            length={64}
            required={true}
          ></Campo>
          <Campo
            title="Cargo"
            type="text"
            placeholder="Cargo na Instituição"
            length={32}
            required={true}
          ></Campo>
          <Campo
            title="CPF"
            type="text"
            placeholder="000.000.000-00"
            length={15}
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
            title="Email"
            type="text"
            placeholder="email_do_membro@email.com"
            length={48}
            required={true}
          ></Campo>
        </div>

        <div className={styles.gridCampos}>
          <Campo
            title="CEP"
            type="text"
            placeholder="00000-000"
            length={9}
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
        </div>
      </div>

      <input type="submit" value="+ Adicionar Membro" />
    </form>
  );
};

export default AddMembro;
