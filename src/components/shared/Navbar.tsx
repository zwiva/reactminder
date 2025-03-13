import { NavLink  } from "react-router-dom"; // se usa para la navegación interna sin recargar la página.
import "./../../styles/components/_navbar.css";

export const Navbar = () => {
  
  console.log('carga shared navbar');

  return (
    <nav className="navbar">
      <div className="navbar__body">
        <div style={{ 'color': 'white' }}>logo</div>
        <ul>
          <li>
            <NavLink  className={({ isActive }) => (isActive ? 'active' : '')} to="/">Inicio</NavLink >
          </li>
          <li>
            <NavLink  className={({ isActive }) => (isActive ? 'active' : '')} to="/about">Nosotros</NavLink >
          </li>
          <li>
            <NavLink  className={({ isActive }) => (isActive ? 'active' : '')} to="/dashboard">Dashboard</NavLink >
          </li>
        </ul>
      </div>
    </nav>
  )
}