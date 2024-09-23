import { RouteObject } from "react-router-dom";
import Login from "../pages/Login/Index";
import Cadastro from "../pages/Cadastro/Index";
import Conta from "../pages/Dashboard/Conta";
import Propostas from "../pages/Dashboard/Propostas";
import Solicitacoes from "../pages/Dashboard/Solicitacoes";
import Fomentos from "../pages/Dashboard/Fomentos";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/conta",
    element: <Conta />,
  },
  {
    path: "/propostas",
    element: <Propostas />,
  },
  {
    path: "/solicitacoes",
    element: <Solicitacoes />,
  },
  {
    path: "/fomentos",
    element: <Fomentos />,
  },
];
