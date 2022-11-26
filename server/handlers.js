"use strict";
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const { v4: uuidv4 } = require("uuid");

// const verifyUser
// Do I need to create if the user exist? So should I create a bunch of user in the data?

const addNewUser = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db();

    const { user } = req.params;
    const userObj = {
      id: user,
      // or id: uuidv4?
      username: req.body.username,
      email: req.body.username,
      password: req.body.password,
    };

    const result = await db.collection("Login").insertOne(userObj);
    return res.status(200).json({ status: 200, data: result });
  } catch (error) {
    return res.status(500).json({ ok: false, data: null });
  } finally {
    client.close();
  }
};

module.exports = {
  addNewUser,
};
