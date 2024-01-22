const express = require('express');
const app = express();
const PORT = process.env.PORT || 8081;
const cors = require('cors');
require('dotenv').config();
//Establish connection to models
const { journalEntry } = require('./models/journal.model')


//Establish connection to routes
const journalRouter = require("./routes/journalRoutes")
app.use("/", journalRouter)

const weatherApi = require("./routes/weatherApi")
app.use("/", weatherApi)

//Cors-origin
var corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));


//setup config connection file
const configDB = require('./config/db.config')

// Create connection to database
const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(configDB.DB, configDB.USER, configDB.PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
})

try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


//Tables
journalEntry
.sync()
.then(()=>{console.log("Journal Entry Table created successfully")})
.catch((e) => {console.log(`Unable to create table due to ${e}`)})

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
