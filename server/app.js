const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;
const cors = require('cors');
const controllers = require('./controllers')
//Cors-origin
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

// Create connection to database
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('testdb', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres'
})

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({message: "Express backend"});
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
