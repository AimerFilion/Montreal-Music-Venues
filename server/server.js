const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const { MongoClient } = require("mongodb");
// const { batchImport } = require("./batchImport");
const { getShows } = require("./handlers");

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

app.get("/shows-casa", getShows);

// app.post("/api/login/:user", addNewUser);
// app.post("/batch", batchImport);

// handle 404
app.use((req, res) => res.status(404).type("txt").send("🤷‍♂️"));
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
