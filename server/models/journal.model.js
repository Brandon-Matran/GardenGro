const { DataTypes, Sequelize} = require("sequelize");
const configDB = require('../config/db.config')
const sequelize = new Sequelize(configDB.DB, configDB.USER, configDB.PASSWORD, {
  host: 'localhost',
  dialect: 'postgres'
})
const journalEntry = sequelize.define("JournalEntry", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true
  }}, {
    freezeTableName: true,
  });


journalEntry
  .sync()
  .then(()=>{console.log("Journal Entry Table created successfully")})
  .catch((e) => {console.log(`Unable to create table due to ${e}`)})

// async function createEntry() {
//   try {
//     const testEntry = await journalEntry.create({
//       title: "TEST",
//       content: "TEST"
//     });
//     console.log(`${testEntry} created`)
//     return testEntry
//   } catch (err) {
//     console.log(err);
//   }

// }

// createEntry()


module.exports = { journalEntry }
