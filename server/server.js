const express = require('express')
const path = require('path')
const cors = require('cors')


const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static('client'))

app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})


const port = process.env.PORT || 5050
app.listen(port,()=>console.log(`server running on `+ port))