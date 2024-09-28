import CadastroInstituicao from "./AreasCadastro/CadastroInstituicao";
import CadastroRepresentante from "./AreasCadastro/CadastroRepresentante";
import CadastroSenha from "./AreasCadastro/CadastroSenha";
import Logo from "../../components/Logo/Logo";

import React, { useState } from "react";

import "./Cadastro.css";

function Cadastro() {
  const [abaAtual, setAba] = useState([true, false, false]);
  const passarPagina = (destino: number) => {
    const bolArr = [false, false, false];
    bolArr[destino] = true;
    setAba(bolArr);
  };

  return (
    <section className="cadastroPg">
      <header>
        <Logo />
      </header>

      <main>
        <form className="formCadastro">
          <div hidden={!abaAtual[0]}>
            <CadastroInstituicao />
            <div className="flex justify-end">
              <button
                className="passarTelaBtn"
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
                className="passarTelaBtn"
                onClick={() => {
                  passarPagina(0);
                }}
              >
                ❮❮ Anterior
              </button>
              <button
                className="passarTelaBtn"
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
                className="passarTelaBtn"
                onClick={() => {
                  passarPagina(1);
                }}
              >
                ❮❮ Anterior
              </button>
              <input
                className="sendBtn"
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
