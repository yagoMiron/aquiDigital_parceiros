import Navbar from "../../components/Navbar/Navbar";
import TableConstructor from "../../components/TableConstructor";
import Cabecalho from "../../components/Cabeçalho";

import TableFomentos from "./data/Fomentos/TableFomentos.json";
import BtnFomentos from "./data/Fomentos/BtnFomentos.json";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import styles from "./Dashboard.module.css";

function Fomentos() {
  const [openNewFomento, setNewFomento] = useState(false);

  return (
    <div className={styles.page}>
      <Navbar activeIndex={3} />
      <section>
        <Cabecalho title="Meus Fomentos" icon="bank" />
        <main>
          <div className={styles.container}>
            <h3>Editais Abertos:</h3>
            <div>
              <TableConstructor
                tableObj={TableFomentos}
                colunaBtn={BtnFomentos}
              />
              <button
                className={styles.addBtn}
                onClick={() => setNewFomento(true)}
              >
                + Termo de Fomento
              </button>
              <Modal
                open={openNewFomento}
                onClose={() => setNewFomento(false)}
                center
                classNames={{
                  modal: styles.customModal,
                }}
              ></Modal>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Fomentos;
