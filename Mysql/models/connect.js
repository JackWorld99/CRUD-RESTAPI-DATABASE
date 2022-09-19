require('dotenv').config()
const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : 'blog_db'
})
   
connection.connect((error) => {
    if(!error){
        console.log('Database connection successful!')

        // Create Database
        // const sql = "CREATE DATABASE IF NOT EXISTS blog_db"
        // const message = "Database created successfully!"

        // Create Table
        // const sql = `CREATE TABLE IF NOT EXISTS posts (
        //     id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        //     title VARCHAR(255) NOT NULL,
        //     body VARCHAR(255) NOT NULL,
        //     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        //     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        // )ENGINE=InnoDB`
        // const message = "Table created successfully!"

        // connection.query(sql , (error, results) => {
        //     if (error) throw error
        //     console.log(results)
        //     console.log(message)
        // })        
    }else{
        console.log('Database Connection Failed!'+ JSON.stringify(error,undefined,2))
        process.exit()
    }
})

module.exports = connection