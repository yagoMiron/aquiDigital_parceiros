import Navbar from "../../components/Navbar/Navbar";
import LinhaDado from "../../components/LinhaDado";
import EditInstituicao from "../../components/ModalForms/EditInstituicao/EditInstituicao";
import Cabecalho from "../../components/Cabeçalho";
import AddMembro from "../../components/ModalForms/AddMembro/AddMembro";
import EditMembro from "../../components/ModalForms/EditMembro/EditMembro";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import styles from "./Dashboard.module.css";

function Conta() {
  const [openAddMembro, setAddMembro] = useState(false);
  const [openEditBtn, setEditBtn] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  // const myRef = React.useRef(null);

  return (
    <div className={styles.page}>
      <Navbar activeIndex={0} />
      <section>
        <Cabecalho title="Minha Conta" icon="group" />

        <main>
          <div className={styles.container}>
            <h3>Dados da Instituição:</h3>
            <div>
              <LinhaDado chave="Nome" valor="Nome da Instituição" />
              <LinhaDado chave="CNPJ" valor="00.000.000/0000-00" />
              <LinhaDado chave="Email" valor="instituicao@gmail.com" />
              <LinhaDado chave="Telefone" valor="(00)00000-0000" />
              <hr />
              <LinhaDado chave="Endereço" valor="Rua, numero, bairro" />
              <LinhaDado chave="Cidade" valor="Cidade" />
              <LinhaDado chave="Estado" valor="Estado" />
              <LinhaDado chave="CEP" valor="00000-000" />
            </div>
            <button
              className={styles.editButton}
              onClick={() =>
                setEditBtn([true, false, false, false, false, false])
              }
            >
              Editar dados
            </button>
            <Modal
              open={openEditBtn[0]}
              onClose={() =>
                setEditBtn([false, false, false, false, false, false])
              }
              center
              classNames={{
                modal: styles.customModal,
              }}
            >
              <EditInstituicao />
            </Modal>
          </div>

          <div className={styles.container}>
            <h3>Dados do Representante:</h3>
            <div>
              <LinhaDado chave="Nome" valor="Nome_Representante" />
              <LinhaDado chave="Cargo" valor="Presidente" />
              <LinhaDado chave="CPF" valor="000.000.000-00" />
              <LinhaDado chave="RG/Órgão" valor="00.000.000 SSP/SP" />
              <LinhaDado chave="Email" valor="representante@gmail.com" />
              <hr />
              <LinhaDado chave="Endereço" valor="Rua, numero, bairro" />
              <LinhaDado chave="Cidade" valor="Cidade" />
              <LinhaDado chave="Estado" valor="Estado" />
              <LinhaDado chave="CEP" valor="00000-000" />
            </div>
            <button
              className={styles.editButton}
              onClick={() =>
                setEditBtn([false, true, false, false, false, false])
              }
            >
              Editar dados
            </button>
            <Modal
              open={openEditBtn[1]}
              onClose={() =>
                setEditBtn([false, false, false, false, false, false])
              }
              center
              classNames={{
                modal: styles.customModal,
              }}
            >
              <EditMembro />
            </Modal>
          </div>
          <button className={styles.addBtn} onClick={() => setAddMembro(true)}>
            + Adicionar Membro
          </button>
          <Modal
            open={openAddMembro}
            onClose={() => setAddMembro(false)}
            center
            classNames={{
              modal: styles.customModal,
            }}
          >
            <AddMembro />
          </Modal>
        </main>
      </section>
    </div>
  );
}

export default Conta;
