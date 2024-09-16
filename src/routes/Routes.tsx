import { RouteObject } from "react-router-dom";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import DashboardCadastro from "../pages/DashboardCadastro";
import DashboardPropostas from "../pages/DashboardPropostas";
import DashboardSolicitacoes from "../pages/DashboardSolicitacoes";
import DashboardFomentos from "../pages/DashboardFomentos";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <Login/>
    },
    {
        path: "/cadastro",
        element: <Cadastro/>
    },
    {
        path: "/dashboard_cadastro",
        element: <DashboardCadastro/>
    },
    {
        path: "/dashboard_propostas",
        element: <DashboardPropostas/>
    },
    {
        path: "/dashboard_solicitacoes",
        element: <DashboardSolicitacoes/>
    },
    {
        path: "/dashboard_fomentos",
        element: <DashboardFomentos/>
    },
]