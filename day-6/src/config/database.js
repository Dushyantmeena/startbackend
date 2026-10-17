const mongoose = require("mongoose");

function connecttoDb() {
  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is not set. Add it to your .env file.");
  }

  return mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected to database");
  });
}

  module.exports = connecttoDb
