// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

function Home() {  
  return (
    <div>
      <h1>Bienvenido</h1>
      <Link className="navegar" to="/login">Iniciar sesion</Link>
      <Link className="navegar" to="/register">Registrar un Usuario</Link>
      <Link className="navegar" to="/insertproduct">Registrar un producto</Link>
      <Link className="navegar" to="/insertdealer">Registrar un proveedor</Link>

    </div>
  );
}
export default Home;