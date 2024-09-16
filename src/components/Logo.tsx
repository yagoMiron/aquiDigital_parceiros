import { Link } from "react-router-dom";
import "../CSS/Logo.css";
import { FunctionComponent } from "react";

interface LogoProps {
  shadow?: boolean;
}

const Logo: FunctionComponent<LogoProps> = ({ shadow }) => {
  return (
    <div className="logo_div">
      <h1 className={shadow ? "shadow main_title" : "main_title"}>
        <Link to="/" className="py-2.5">
          <strong className="yellow_bg">Aqui</strong>Digital
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
