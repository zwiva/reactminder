import reactLogo from "../../assets/react.svg";
import "./../../styles/components/_footer.css";

export const Footer = () => {
  
  console.log('carga shared footer');

  return (
    <footer>
      <div className="footer__body">
        <span>
          Desarrollado por zwiva con React
        </span>
        <img src={reactLogo} alt="react logo" />
      </div>
    </footer>
  )
}