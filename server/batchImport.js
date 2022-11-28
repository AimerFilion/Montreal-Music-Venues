const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const casaData = require("./data/VenueCasaDelPopolo.json");

const batchImport = async (req, res) => {
  console.log(casaData);
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("venues");
  const result = await db.collection("Casa").insertMany(casaData);

  console.log(result);

  client.close();
};

batchImport();

module.exports = { batchImport };
