const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

//import routes
const homeRoute = require("./routes");

app.use("/", homeRoute);

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
