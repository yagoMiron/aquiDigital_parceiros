import { Link } from "react-router-dom";
import "./Logo.css";
import { FunctionComponent } from "react";

interface LogoProps {
  shadow?: boolean;
}

const Logo: FunctionComponent<LogoProps> = ({ shadow }) => {
  return (
    <div className="logo">
      <h1 className={shadow ? "shadow" : ""}>
        <Link to="/">
          <strong>Aqui</strong>Digital
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
