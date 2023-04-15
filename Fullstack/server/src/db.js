// const mysql = require("mysql2")


// const sqlModel = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'deep123',
//     database : 'notes'
// })

// sqlModel.connect((err) => {
//     if (err) { console.log(err.message) }
//     else { console.log("MySQL Connected") }
// })

// module.exports = { sqlModel }

const mysql = require("mysql2")


const sqlModel = mysql.createConnection({
    host     : 'sql12.freemysqlhosting.net',
    port     :  3306,
    user     : 'sql12613009',
    password : 'YMuurMT2Mi',
    database : 'sql12613009'
})

sqlModel.connect((err) => {
    if (err) { console.log(err.message) }
    else { console.log("MySQL Connected") }
})

module.exports = { sqlModel }
