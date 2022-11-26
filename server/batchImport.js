const { json } = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const login = require("./data");

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("finalproject");
  const result = await db.collection("Login").insertMany(login);

  client.close();

  result.status(200).json({ status: 200, data: result });
};

module.exports = { batchImport };
