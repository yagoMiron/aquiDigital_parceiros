import CadastroInstituicao from "./AreasCadastro/CadastroInstituicao";
import CadastroRepresentante from "./AreasCadastro/CadastroRepresentante";
import CadastroSenha from "./AreasCadastro/CadastroSenha";
import Logo from "../../components/Logo";

import React, { useState } from "react";

import styles from "./Cadastro.module.css";

function Cadastro() {
  const [abaAtual, setAba] = useState([true, false, false]);
  const passarPagina = (destino: number) => {
    const bolArr = [false, false, false];
    bolArr[destino] = true;
    setAba(bolArr);
  };

  return (
    <section className={styles.cadastroPg}>
      <header>
        <Logo />
      </header>

      <main>
        <form className={styles.formCadastro}>
          <div hidden={!abaAtual[0]}>
            <CadastroInstituicao />
            <div className="flex justify-end">
              <button
                className={styles.passarTelaBtn}
                onClick={() => {
                  passarPagina(1);
                }}
              >
                Proximo ❯❯
              </button>
            </div>
          </div>
          <div hidden={!abaAtual[1]}>
            <CadastroRepresentante />
            <div className="flex justify-between">
              <button
                className={styles.passarTelaBtn}
                onClick={() => {
                  passarPagina(0);
                }}
              >
                ❮❮ Anterior
              </button>
              <button
                className={styles.passarTelaBtn}
                onClick={() => {
                  passarPagina(2);
                }}
              >
                Proximo ❯❯
              </button>
            </div>
          </div>
          <div hidden={!abaAtual[2]}>
            <CadastroSenha />
            <div className="flex justify-between">
              <button
                className={styles.passarTelaBtn}
                onClick={() => {
                  passarPagina(1);
                }}
              >
                ❮❮ Anterior
              </button>
              <input
                className={styles.sendBtn}
                type="submit"
                value="⤷ Finalizar Cadastro"
              />
            </div>
          </div>
        </form>
      </main>
    </section>
  );
}

export default Cadastro;
