const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const mongoUrl = process.env.MONGO_CONNECTION_STRING;

// app
const app = express();

// connect database
mongoose
  .connect(mongoUrl)
  // .connect("mongodb://127.0.0.1:27017/bodima")
  .then(() => console.log("db is running"))
  .catch((err) => console.log(err));

// load routers
const placeRoutes = require("./routes/api/songsRoutes");

// cors
app.use(cors());

// use routes middleware
app.use("/api/v1/places", placeRoutes);

// port
const PORT = process.env.PORT || 8000;

// run server
app.listen(PORT, () => console.log(`server is running in Port ${PORT}`));
