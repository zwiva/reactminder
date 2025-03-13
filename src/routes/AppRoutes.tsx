import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Dashboard = lazy(() => import("../pages/Dashboard"));

export const AppRoutes = () => {
  console.log('Carga AppRoutes');
  
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Suspense>
  )
};