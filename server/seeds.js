const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Cat = require("./models/Cats");
const catsArray = require("./data");

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

const seedDB = async () => {
  await Cat.create(catsArray);
};

seedDB().then(() => {
  mongoose.connection.close();
});
