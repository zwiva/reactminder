import "./../styles/pages/_home.css";

const Home = () => {
 
  console.log('carga page Home');

  return (
    <div className="home">
      <div>
        <h1>Bienvenido a la página de inicio</h1>
        <p>Esta es una vista en React 19</p>
      </div>
    </div>
  );
};

export default Home;