const express = require('express')
const mongoose = require('mongoose')
const postsRoute = require("./routes/index")
require('dotenv').config()

const port = process.env.PORT || 3000
const url = process.env.DATABASE_URL
const app = express()

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Databse Connected Successfully!"))
  .catch((error) => {
    console.log(`Couldn't connect to the database: ${error}`)
    process.exit()
})

app.use(express.json())
app.use("/api/posts", postsRoute)

app.listen(port, () => {
    console.log(`Server listening at port http://localhost:${port}`)
})

