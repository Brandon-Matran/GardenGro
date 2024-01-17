const { DataTypes, Sequelize} = require("sequelize");
const configDB = require('../config/db.config')
const sequelize = new Sequelize(configDB.DB, configDB.USER, configDB.PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
})
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const {journalEntry} = require('../models/journal.model')


router.use(bodyParser.json());

router.get("/journals", async (req, res) => {
    try{
        const journals = await journalEntry.findAll();
        return res.json(journals)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router;
