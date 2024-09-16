import { Link } from "react-router-dom";
import "../CSS/svgBg.css";

const ExitButton = () => {
  return (
    <Link
      className="rounded-2xl mx-2 svg_base text-yellow-300 hover:text-blue-950 svg_base exit_btn"
      to="/"
    >
      <p className="m-1 mx-10 ml-12 font_bold">Sair</p>
    </Link>
  );
};

export default ExitButton;
