import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import service from "../service";
import Card from "../components/Card";

const Home = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    service.allCats().then((allCats) => setCats(allCats));
  }, []);

  return (
    <div style={{ margin: "30px" }}>
      <div>
        <h1>Bienvenue sur InstaMiaou</h1>
        <h2>Votez pour le chat le plus mimi </h2>
        <Link to="/vote">
          <h3>Je vote</h3>
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {cats.map((cat) => (
          <div style={{ marginBottom: "50px" }}>
            <Card imgUrl={cat.url} score={cat.votes} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
