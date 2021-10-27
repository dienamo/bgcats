import { useState, useEffect } from "react";
import service from "../service";
import Card from "../components/Card";

const Home = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    service.allCats().then((allCats) => setCats(allCats));
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
