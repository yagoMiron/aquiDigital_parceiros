import Campo from "../../../components/Campo";

function CadastroSenha() {
  return (
    <>
      <h2>
        3. Cadastre sua <strong>Senha</strong>
      </h2>
      <p>O Login da sua conta será o email da Instituição cadastrada</p>
      <Campo
        title="Senha"
        type="password"
        placeholder="Digite sua senha"
        length={128}
        required={true}
      ></Campo>

      <Campo
        title="Confirmar Senha"
        type="password"
        placeholder="Confirme a sua senha"
        length={128}
        required={true}
      ></Campo>
    </>
  );
}

export default CadastroSenha;
