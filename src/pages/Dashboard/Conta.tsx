import Navbar from "../../components/Navbar/Navbar";
import LinhaDado from "../../components/LinhaDado/LinhaDado";
import EditButton from "../../components/EditButton/EditButton";
import Cabecalho from "../../components/Cabeçalho/Cabecalho";
import AddMembro from "../../components/AddMembro/AddMembro";
import "./Dashboard.css";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

function Conta() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // const myRef = React.useRef(null);

  return (
    <div className="page">
      <Navbar activeIndex={0} />
      <section>
        <Cabecalho title="Minha Conta" icon="group" />

        <main>
          <div className="container">
            <h3>Dados da Instituição:</h3>
            <div>
              <LinhaDado chave="Nome" valor="Nome_Representante" />
              <LinhaDado chave="CNPJ" valor="00.000.000/0000-00" />
              <LinhaDado chave="Email" valor="instituicao@gmail.com" />
              <LinhaDado chave="Telefone" valor="(00)00000-0000" />
              <hr />
              <LinhaDado chave="Endereço" valor="Rua, numero, bairro" />
              <LinhaDado chave="Cidade" valor="Cidade" />
              <LinhaDado chave="Estado" valor="Estado" />
              <LinhaDado chave="CEP" valor="00000-000" />
              <hr />
              <LinhaDado chave="Banco" valor="Banco do Brasil" />
              <LinhaDado chave="Agencia" valor="0000" />
              <LinhaDado chave="Conta Corrente" valor="000000" />
            </div>
            <EditButton />
          </div>

          <div className="container">
            <h3>Dados do Representante:</h3>
            <div>
              <LinhaDado chave="Nome" valor="Nome_Representante" />
              <LinhaDado chave="Cargo" valor="Presidente" />
              <LinhaDado chave="CPF" valor="000.000.000-00" />
              <LinhaDado chave="RG/Órgão" valor="00.000.000 SSP/SP" />
              <LinhaDado chave="Email" valor="representante@gmail.com" />
              <hr />
              <LinhaDado chave="CEP" valor="00000-000" />
              <LinhaDado chave="Endereço" valor="Rua, numero, bairro" />
              <LinhaDado chave="Cidade" valor="Cidade" />
              <LinhaDado chave="Estado" valor="Estado" />
            </div>
            <EditButton />
          </div>
          <button className="addBtn" onClick={onOpenModal}>
            + Adicionar Membro
          </button>
        </main>
      </section>

      <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          modal: "customModal",
        }}
      >
        <AddMembro></AddMembro>
      </Modal>
    </div>
  );
}

export default Conta;
