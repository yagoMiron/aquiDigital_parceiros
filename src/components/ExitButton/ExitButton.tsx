import { Link } from "react-router-dom";
import "./ExitButton.css";

const ExitButton = () => {
  return (
    <Link className="exitButton" to="/">
      <span>Sair</span>
    </Link>
  );
};

export default ExitButton;
