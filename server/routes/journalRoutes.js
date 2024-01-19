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

// GET all journals
router.get("/journals", async (req, res) => {
    try{
        const journals = await journalEntry.findAll();
        return res.json(journals)
    } catch (err) {
        console.log(err)
    }
})
//GET one journal
router.get("/journals/:id", async(req, res)=> {
    try {
        const journal = await journalEntry.findById(req.params.id);
        res.json(journal)
    } catch (e) {
        console.log(e)
    }
})
//Create journal entry
router.post("/journals", async (req, res) => {
    try {
        const entry = await journalEntry.create(req.body)
        console.log(`Success! Created `)
        return res.json(entry)
    } catch (err) {
        console.log(err)
    }
})
module.exports = router;
