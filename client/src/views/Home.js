import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

const Home = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cats")
      .then((allCats) => setCats(allCats.data));
  }, []);

  return (
    <div>
      {cats.map((cat) => (
        <Card imgUrl={cat.url} />
      ))}
    </div>
  );
};

export default Home;
