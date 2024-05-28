const mongoose = require("mongoose");

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;
// const host = process.env.DB_HOST;
// const port = 27017;
// const database = memberhub;
// // mongodb://localhost:27017

const host = "localhost";
const port = 27017;
const database = "memberhub";

const connectDB = async () => {
  await mongoose.connect(`mongodb://${host}:${port}/${database}`);
  console.log("MongoDB connected");
};

module.exports = connectDB;
