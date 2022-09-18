const connection = require("../models/connect")

exports.findAll = (req, res) => {
    const sqlQuery = "SELECT * FROM posts"
    const query = connection.query(sqlQuery, (error, results) => {
        if(error) throw error
        const message = "Find all posts!"
        res.send(apiResponse(message, results))
    })
}

exports.findById = (req, res) => {
    const sqlQuery = `SELECT * FROM posts WHERE id='${req.params.id}'`
    const query = connection.query(sqlQuery, (error, results) => {
      if(error) throw error
      const message = "Find post!"
      res.send(apiResponse(message, results))
    })
}

exports.create = (req, res) => {
    const data = {title: req.body.title, body: req.body.body}
    const sqlQuery = "INSERT INTO posts SET ?"
    const query = connection.query(sqlQuery, data, (error, results) => {
      if(error) throw error
      const message = "Post created successfully!"
      res.send(apiResponse(message, results))
    })
}

exports.update = (req, res) => {
    const sqlQuery = `UPDATE posts SET title='${req.body.title}', body='${req.body.body}' WHERE id='${req.params.id}'`
    const query = connection.query(sqlQuery, (error, results) => {
      if(error) throw error
      const message = "Post updated successfully!"
      res.send(apiResponse(message, results))
    })
}

exports.delete = (req, res) => {
    const sqlQuery = `DELETE FROM posts WHERE id='${req.params.id}'`
    const query = connection.query(sqlQuery, (error, results) => {
      if(error) throw error
      const message = "Post deleted successfully!"
      res.send(apiResponse(message, results))
    })
}

apiResponse = (message, result) => {
    return JSON.stringify({"status": 200, "error": null,"message": message, "response": result})
}
