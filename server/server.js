const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const { MongoClient } = require("mongodb");
// const { batchImport } = require("./batchImport");
const {
  getEventsCasa,
  getEventsRitz,
  addNewUser,
  updateFavoriteEvent,
  getUser,
  // addEventKeyInFavoriteUser,
} = require("./handlers");

require("dotenv").config();
const { MONGO_URI } = process.env;

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
// endpoints
app.get("/hello", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "this is working well!",
  });
});

app.get("/user/:email", getUser);
app.get("/shows-casa", getEventsCasa);
app.get("/shows-ritz", getEventsRitz);
// app.get("/key", addEventKeyInFavoriteUser);

app.post("/new-user", addNewUser);
// app.post("/batch-import", batchImport);
app.patch("/update-favorites", updateFavoriteEvent);

// handle 404
app.use((req, res) => res.status(404).type("txt").send("🤷‍♂️"));
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
