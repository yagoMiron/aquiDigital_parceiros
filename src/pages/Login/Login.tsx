import Logo from "../../components/Logo";
import Campo from "../../components/Campo";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";

function Login() {
  return (
    <section className={styles.background_section}>
      <div className={styles.login_container}>
        <form action="">
          <Logo shadow={true} />

          <Campo
            title="Login"
            type="text"
            placeholder="Digite o email da sua instituição"
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
            className={styles.submit_button}
          />
          <Link to="/" className={styles.white_anchor}>
            Recuperar Senha
          </Link>
          <hr className="w-80 h-0.5 mb-2 rounded-md border-blue-950 text-lg" />
          <Link to="/cadastro" className={styles.blue_anchor}>
            Criar conta
          </Link>
        </form>
      </div>
    </section>
  );
}
export default Login;
