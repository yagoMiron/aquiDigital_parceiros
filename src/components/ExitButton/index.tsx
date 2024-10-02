import { Link } from "react-router-dom";
import styles from "./ExitButton.module.css";

const ExitButton = () => {
  return (
    <Link className={styles.exitButton} to="/">
      <span>Sair</span>
    </Link>
  );
};

export default ExitButton;
