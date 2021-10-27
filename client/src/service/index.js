import axios from "axios";

const service = axios.create({
  baseURL: `http://localhost:5000`,
});

const allCats = () =>
  service
    .get("/cats")
    .then((res) => res.data)
    .catch((err) => console.log(err));

const twoCats = () =>
  service
    .get("/random-cats")
    .then((res) => res.data)
    .catch((err) => console.log(err));

const vote = (catId) =>
  service
    .put("/vote", { catId })
    .then((res) => res.data)
    .catch((err) => console.log(err));

export default { allCats, twoCats, vote };
