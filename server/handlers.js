"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// const { v4: uuidv4 } = require("uuid");

const getShows = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("venues");

    const result = await db.collection("Casa").find().toArray();

    res.status(200).json({
      ok: 200,
      data: result,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, data: null });
  } finally {
    client.close();
  }
};

module.exports = { getShows };
