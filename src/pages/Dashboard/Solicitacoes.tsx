import Navbar from "../../components/Navbar/Navbar";
import TableConstructor from "../../components/TableConstructor";
import Cabecalho from "../../components/Cabeçalho";

import TableCooperacao from "./data/Solicitacoes/TableCooperacao.json";
import BtnCooperacao from "./data/Solicitacoes/BtnCooperacao.json";

import styles from "./Dashboard.module.css";

function Solicitacoes() {
  return (
    <div className={styles.page}>
      <Navbar activeIndex={2} />
      <section>
        <Cabecalho title="Minhas Solicitações" icon="hands" />
        <main>
          <div className={styles.container}>
            <h3>Cooperação Técnica:</h3>
            <div>
              <TableConstructor
                tableObj={TableCooperacao}
                colunaBtn={BtnCooperacao}
              />
              <button className={styles.addBtn}>
                + Termo de Cooperação Técnica
              </button>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Solicitacoes;
