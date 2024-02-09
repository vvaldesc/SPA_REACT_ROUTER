import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const ListaUsuarios = ({ AllUsers }) => {
  return (
    AllUsers.map((user) => {
      return (
        <li key={user.id}>
          <Link to={`/usuario/${user.id}`}>{user.first} {user.last}</Link>
        </li>
      );
    })
  );
};

const Lista = ({ AllUsers }) => {
  debugger
  return (
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <ListaUsuarios AllUsers={AllUsers} />
      <li>
        <Link to="/productos">Productos</Link>
      </li>
      <li>
        <Link to="/compras">Compras</Link>
      </li>
    </ul>
  );
};

const Layout = ({ AllUsers }) => {
  debugger
  return (
    <>
    <p>Menú</p>
    <div className="horizontal">
      <Lista AllUsers={AllUsers} />
      <Outlet />
    </div>
    </>

  );
};

export default Layout;
