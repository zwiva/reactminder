import { ReactNode } from "react";
import { Navbar } from "../components/shared/Navbar";
import { Footer } from "../components/shared/Footer";
import "../styles/base/_layout.css"

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => { // se crea para envolver las rutas y mostrar el Navbar en todas las páginas.

  console.log('CARGA Layout');

  return (
    <div className="layout">
      <Navbar />
      <div className="layout__body">{children}</div>
      <Footer />
    </div>
  );
};