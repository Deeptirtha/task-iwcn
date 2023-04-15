const mysql = require("mysql2")


const sqlModel = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'deep123',
    database : 'notes'
})

sqlModel.connect((err) => {
    if (err) { console.log(err.message) }
    else { console.log("MySQL Connected") }
})

module.exports = { sqlModel }
