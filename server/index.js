const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())


const port = process.env.PORT || 4545

app.listen(port, console.log(`Take us to Warp ${port}!`))

