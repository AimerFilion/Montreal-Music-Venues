const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// const casaData = require("./data/VenueCasaDelPopolo.json");
// const ritzData = require("./data/venueRitz.json");
// const batchImport = async (req, res) => {
//   const client = new MongoClient(MONGO_URI, options);

//   await client.connect();
//   const db = client.db("Events");
//   const result = await db.collection("Ritz").insertMany(ritzData);

//   console.log(result);

//   client.close();
// };

// batchImport();

module.exports = { batchImport };
