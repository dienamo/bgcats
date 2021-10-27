import { useState, useEffect } from "react";
import Card from "../components/Card";
import service from "../service";

const Vote = () => {
  const [cats, setCats] = useState([]);

  const giveOnePoint = (catId) => {
    service.vote(catId).then((cat) => console.log("RRRRR", cat));
  };

  useEffect(() => {
    service.twoCats().then((twoCats) => setCats(twoCats));
  }, []);

  return (
    <div>
      <h1>Votez</h1>
      {cats.map((cat, i) => (
        <Card imgUrl={cat.url} key={i} onClick={() => giveOnePoint(cat._id)} />
      ))}
    </div>
  );
};

export default Vote;
