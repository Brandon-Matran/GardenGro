const express = require("express");
const app = express();
const PORT = process.env.PORT || 8081;
const cors = require('cors');

//Cors-origin
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

// Parse JSON bodies
// app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({message: "Express backend"});
});



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
