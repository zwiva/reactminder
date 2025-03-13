import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { Layout } from "./layouts/Layout";
import "./App.css";

const App = () => {
  console.log('CARGA APP');

  return (
    <Router>
      <Layout> {/* Aquí se pasan los children correctamente */}
        <AppRoutes />
      </Layout>
    </Router>
  );
};

export default App;
