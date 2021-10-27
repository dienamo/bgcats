import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import service from "../service";

const Vote = () => {
  const [cats, setCats] = useState([]);

  const giveOnePoint = (catId) => {
    service.vote(catId).then((res) => setCats(res.twoCats));
  };

  useEffect(() => {
    service.twoCats().then((twoCats) => setCats(twoCats));
  }, []);

  return (
    <div>
      <Link to="/">
        <h3>Accueil</h3>
      </Link>
      <h1>Votez</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {cats.map((cat, i) => (
          <>
            <Card
              imgUrl={cat.url}
              key={i}
              score={cat.votes}
              onClick={() => giveOnePoint(cat._id)}
            />
            {i === 0 && <h3>OU</h3>}
          </>
        ))}
      </div>
    </div>
  );
};

export default Vote;
