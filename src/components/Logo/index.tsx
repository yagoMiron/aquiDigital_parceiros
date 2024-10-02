import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import { FunctionComponent } from "react";

interface LogoProps {
  shadow?: boolean;
}

const Logo: FunctionComponent<LogoProps> = ({ shadow }) => {
  return (
    <div className={styles.logo}>
      <h1 className={shadow ? styles.shadow : ""}>
        <Link to="/">
          <strong>Aqui</strong>Digital
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
