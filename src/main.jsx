import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import * as dataUser from "./assets/libraries/data_user.js";
console.log(dataUser.getUsers());

import "bootstrap/dist/css/bootstrap.min.css";

//import Clientes from "./componentes/Clientes.jsx";
import Compras from "./componentes/Compras.jsx";
//import Error404 from "./componentes/Error404.jsx";
import Home from "./componentes/Home.jsx";
import Productos from "./componentes/Productos.jsx";
import Layout from "./componentes/Layout.jsx";
import Usuario from "./componentes/Usuario.jsx";




ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout AllUsers={dataUser.getUsers()} />} >
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="productos" element={<Productos />} />
        <Route path="usuario/:id" element={<Usuario dataUser={dataUser}/>} />
        <Route path="compras" element={<Compras />} />
      </Route>

      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
);
