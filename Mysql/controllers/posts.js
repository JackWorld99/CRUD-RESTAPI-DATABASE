const connection = require("../models/connect")

exports.findAll = (req, res) => {
  const sqlQuery = "SELECT * FROM posts"
  connection.query(sqlQuery, (error, results) => {
      if(error) throw error
      const data = {response: results, message: "All posts found!"}
      res.send(data)
  })
}

exports.findById = (req, res) => {
  const sqlQuery = `SELECT * FROM posts WHERE id='${req.params.id}'`
  connection.query(sqlQuery, (error, results) => {
    if(error) throw error
    const data = {response: results, message: "Found post id: " + req.params.id}
    res.send(data)
  })
}

exports.create = (req, res) => {
  const data = {title: req.body.title, body: req.body.body}
  const sqlQuery = "INSERT INTO posts SET ?"
  connection.query(sqlQuery, data, (error, results) => {
    if(error) throw error
    const data = {response: results, message: "Post created successfully!"}
    res.send(data)
  })
}

exports.update = (req, res) => {
  const sqlQuery = `UPDATE posts SET title='${req.body.title}', body='${req.body.body}' WHERE id='${req.params.id}'`
  connection.query(sqlQuery, (error, results) => {
    if(error) throw error
    const data = {response: results, message: "Post updated successfully!"}
    res.send(data)
  })
}

exports.delete = (req, res) => {
  const sqlQuery = `DELETE FROM posts WHERE id='${req.params.id}'`
  connection.query(sqlQuery, (error, results) => {
    if(error) throw error
    const data = {response: results, message: "Post deleted successfully!"}
    res.send(data)
  })
}

exports.deleteAll = (req, res) => {
  const sqlQuery = "DELETE FROM posts"
  connection.query(sqlQuery, (error, results) => {
    if(error) throw error
    const data = {response: results, message:  "All post deleted successfully!"}
    res.send(data)
  })
}