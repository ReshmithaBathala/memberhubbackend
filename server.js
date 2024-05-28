const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const memberRoutes = require("./routes/members");
const authRoutes = require("./routes/auth");
const app = express();

app.use(cors());
app.use(bodyParser.json());

const host = "localhost";
const port = 27017;
const database = "memberhub";

mongoose.connect(`mongodb://${host}:${port}/${database}`);

app.use("/api/members", memberRoutes);
app.use("/api/auth", authRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
