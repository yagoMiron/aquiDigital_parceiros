import { FunctionComponent } from "react";
import styles from "./Campo.module.css";

interface CampoProps {
  title: string;
  type: "text" | "email" | "tel" | "password";
  placeholder: string;
  length: number;
  required: boolean;
}

const Campo: FunctionComponent<CampoProps> = ({
  title,
  type,
  placeholder,
  length,
  required,
}) => {
  const nome = title.toLowerCase().replace(" ", "_");

  return (
    <div className={styles.campo}>
      <label htmlFor={nome}>{title}:</label>
      <input
        type={type}
        name={nome}
        id={nome}
        placeholder={placeholder}
        maxLength={length}
        required={required}
      />
    </div>
  );
};

export default Campo;
