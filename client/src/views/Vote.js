import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Vote = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/random-cats")
      .then((twoCats) => setCats(twoCats.data));
  }, []);
  console.log("DDDDDD", cats);
  return (
    <div>
      <h1>Votez</h1>
      {cats.map((cat, i) => (
        <Card imgUrl={cat.url} key={i} />
      ))}
    </div>
  );
};

export default Vote;
