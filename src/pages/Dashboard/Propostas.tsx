import Navbar from "../../components/Navbar/Navbar";
import TableConstructor from "../../components/TableConstructor";
import Cabecalho from "../../components/Cabeçalho";

import TableEditaisAbertos from "./data/Propostas/TableEditaisAbertos.json";
import BtnEditaisAbertos from "./data/Propostas/BtnEditaisAbertos.json";
import TableMinhasPropostas from "./data/Propostas/TableMinhasPropostas.json";

import styles from "./Dashboard.module.css";

function Propostas() {
  return (
    <div className={styles.page}>
      <Navbar activeIndex={1} />
      <section>
        <Cabecalho title="Minhas Propostas" icon="document" />
        <main>
          <div className={styles.container}>
            <h3>Editais Abertos:</h3>
            <div>
              <TableConstructor
                tableObj={TableEditaisAbertos}
                colunaBtn={BtnEditaisAbertos}
              />
            </div>
          </div>

          <div className={styles.container}>
            <h3>Minhas propostas:</h3>
            <div>
              <TableConstructor tableObj={TableMinhasPropostas} />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Propostas;
