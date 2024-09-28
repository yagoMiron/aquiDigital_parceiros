import Navbar from "../../components/Navbar/Navbar";
import TableConstructor from "../../components/TableConstructor/TableConstructor";
import Cabecalho from "../../components/Cabeçalho/Cabecalho";
import "./Dashboard.css";

import TableFomentos from "./data/TableFomentos.json";
import BtnFomentos from "./data/BtnFomentos.json";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "./Dashboard.css";

function Fomentos() {
  const [openNewFomento, setNewFomento] = useState(false);

  return (
    <div className="page">
      <Navbar activeIndex={3} />
      <section>
        <Cabecalho title="Meus Fomentos" icon="bank" />
        <main>
          <div className="container">
            <h3>Editais Abertos:</h3>
            <div>
              <TableConstructor
                tableObj={TableFomentos}
                colunaBtn={BtnFomentos}
              />
              <button className="addBtn" onClick={() => setNewFomento(true)}>
                + Termo de Fomento
              </button>
              <Modal
                open={openNewFomento}
                onClose={() => setNewFomento(false)}
                center
                classNames={{
                  modal: "customModal",
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
