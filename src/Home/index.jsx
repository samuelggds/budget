import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/registro");
  };

  return <button onClick={handleClick}>Ir para a tela de registro</button>;
}

export default Home;
