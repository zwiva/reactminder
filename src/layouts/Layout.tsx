import { ReactNode } from "react";
import { Navbar } from "../components/shared/Navbar";
import { Footer } from "../components/shared/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => { // se crea para envolver las rutas y mostrar el Navbar en todas las páginas.

  console.log('CARGA Layout');

  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};