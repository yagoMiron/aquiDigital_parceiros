import Logo from "../components/Logo";

import "../CSS/Login.css";
import Campo from "../components/Campo";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="flex box-border items-center min-h-screen background_section">
      <div className=" rounded-md items-center text-center m-auto p-5 border border-blue-950 login_container">
        <form className="flex flex-col items-center gap-2" action="">
          <Logo shadow={true} />

          <Campo
            title="Login"
            type="text"
            placeholder="Digite seu Usuário"
            length={128}
            required={true}
          ></Campo>
          <Campo
            title="Senha"
            type="password"
            placeholder="Digite sua Senha"
            length={128}
            required={true}
          ></Campo>

          <input
            type="submit"
            value="Entrar"
            className="w-80 rounded-md submit_button border border-blue-950 w-80 text-lg py-2.5"
          />
          <Link to="/" className="w-80 rounded-md white_anchor text-lg py-2.5">
            Recuperar Senha
          </Link>
          <hr className="w-80 h-0.5  mb-2 rounded-md border-blue-950 text-lg" />
          <Link to="/cadastro" className="w-80 rounded-md blue_anchor py-2.5">
            Criar conta
          </Link>
        </form>
      </div>
    </section>
  );
}
export default Login;
