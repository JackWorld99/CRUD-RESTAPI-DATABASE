const mongoose = require("mongoose")

const Post = new mongoose.Schema({
  title: {type: String, required: true,},
  body: {type: String, required: true},
},
{ timestamps: true })

module.exports = mongoose.model("Post", Post);