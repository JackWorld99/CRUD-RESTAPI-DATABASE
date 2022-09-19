const Post = require('../models/Post')

exports.findAll = (req, res) => {
  Post.find({}).then(data => {
    const result = {response: data, message: "All posts found!"}
    res.send(result)
  }).catch(err => res.status(500).send({ message: err.message}))
}

exports.findById = (req, res) => {
  if (!req.params.id) return res.status(400).send({ message: "ID required!" })
  const id = req.params.id
  Post.findById(id).then(data => {
    const result = {response: data, message: "Found post id: " + id}
    res.send(result)
  }).catch(err => res.status(500).send({ message: err.message}))
}

exports.create = (req, res) => {
  if (!req.body.title) return res.status(400).send({ message: "Title required!" })
  if (!req.body.body) return res.status(400).send({ message: "Body required!" })

  const data = { 
    title: req.body.title, 
    body: req.body.body
  }

  Post.create(data, (error, result) => {
    if(error) res.status(500).send({message: error.message})
    const results = {response: result, message: "Post created successfully"}
    res.send(results)
  })
}

exports.update = (req, res) => {
  if (!req.body) return res.status(400).send({message: "Request body not found!"})
  if (!req.params.id) return res.status(400).send({ message: "ID required!" })

  Post.findByIdAndUpdate(req.params.id, req.body).then(data => {
    const result = {response: data, message: "Post updated successfully!"}
    res.send(result)
  }).catch(err => res.status(500).send({message: err.message}))
}

exports.delete = (req, res) => {
  if (!req.params.id) return res.status(400).send({ message: "ID required!" })
  
  Post.findByIdAndDelete(req.params.id).then(data => {
    const result = {response: data, message: "Post deleted successfully!"}
    res.send(result)
  }).catch(err => res.status(500).send({message: err.message}))
}

exports.deleteAll = (req, res) => {
  Post.deleteMany({}).then(data => {
    const result = {response: data, message:  `${data.deletedCount} posts have been successfully deleted!`}
    res.send(result)
  }).catch(err => res.status(500).send({message: err.message}))
}