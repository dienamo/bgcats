const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();

//import routes
const catsRoute = require("./routes/cats-routes");

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"], // <== this will be the URL of our React app (it will be running on port 3000)
  })
);
app.use("/", catsRoute);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) =>
    // eslint-disable-next-line no-console
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  // eslint-disable-next-line no-console
  .catch((err) => console.error("Error connecting to mongo", err));

app.listen(5000);
