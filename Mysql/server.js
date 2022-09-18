const express = require('express')
const postsRoute = require("./routes/index")
const port = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use("/api/posts", postsRoute)

app.listen(port, () => {
    console.log(`Server listening at port http://localhost:${port}`)
})

