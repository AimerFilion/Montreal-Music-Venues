const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const { MongoClient } = require("mongodb");
// const { batchImport } = require("./batchImport");
const {
  getEventsCasa,
  getEventsRitz,
  addNewUser,
  unFavoriteEvent,
  eventFavorite,
  getUser,
  getFavoriteEvent,
  getVenueInfo,
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

// User
app.get("/user/:email/favorites", getFavoriteEvent);
app.get("/user/:email", getUser);
// app.get("/key", getEventKeyInFavoriteUser);

app.post("/new-user", addNewUser);
// app.post("/batch-import", batchImport);

app.patch("/favorite", eventFavorite);
app.patch("/unfavorite", unFavoriteEvent);
// Events
app.get("/shows-casa", getEventsCasa);
app.get("/shows-ritz", getEventsRitz);

// Venues
app.get("/venue/:venue_id", getVenueInfo);

// handle 404
app.use((req, res) => res.status(404).type("txt").send(" 🤷‍♂️"));
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
