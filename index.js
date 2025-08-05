const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const mongoUrl = process.env.MONGO_CONNECTION_STRING;

// connect database
mongoose
 // .connect(mongoUrl)
    .connect("mongodb://127.0.0.1:27017/gigapp")
  .then(() => console.log("db is running"))
  .catch((err) => console.log(err));




// Middleware
app.use(express.json());

// cors
app.use(cors());





// load routers



const songsRoutes = require("./routes/api/songsRoutes");

const gigsRoutes = require("./routes/api/gigsRoutes");


// use routes middleware


app.use("/api/songs", songsRoutes);

app.use("/api/gigs", gigsRoutes);




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});