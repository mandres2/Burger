//Import MySQl dependencies

const mysql = require("mysql");
let connection;


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
}



//connect to the database
connection.connect();

connection.connect(function (err) {
    if (err) {
        return;
    }
    console.log("connected as id" + connection.threadId);
});

//export connection
module.exports = connection;