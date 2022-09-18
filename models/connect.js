const mysql = require('mysql')

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'blog_db'
})
   
connection.connect((error) => {
    if(!error){
        console.log('Database connection successful!')
        // Create Database
        // connection.query('CREATE DATABASE IF NOT EXISTS blog_db', (error, results) => {
        //     if (error) throw error
        //     console.log(results)
        //     console.log("Database created successfully!")
        // })

        // Create Table
        // const sql = `CREATE TABLE IF NOT EXISTS posts (
        //     id BIGINT UNSIGNED AUTO_INCREMENT,
        //     title VARCHAR(255) NOT NULL,
        //     body VARCHAR(255) NOT NULL,
        //     created_at DATETIME NOT NULL,
        //     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        //     PRIMARY KEY (id)
        // )ENGINE=InnoDB`
        // connection.query(sql , (error, results) => {
        //     if (error) throw error
        //     console.log(results)
        //     console.log("Table created successfully!")
        // })        
    }else{
        console.log('Database Connection Failed!'+ JSON.stringify(error,undefined,2))
        process.exit()
    }
})

module.exports = connection