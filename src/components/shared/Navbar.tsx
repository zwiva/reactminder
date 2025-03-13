import { Link } from "react-router-dom"; // se usa para la navegación interna sin recargar la página.
import "./../../styles/components/_navbar.css";

export const Navbar = () => {
  console.log('carga shared navbar');

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Acerca de</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  )
}