const express = require('express')
const cors = require('cors')
const path = require('path')


const app = express()

app.use(express.json())
app.use(cors())

app.get('/',()=>{
    res.sendFile(path.join(__dirname, '../client/index.html'))
})


const port = process.env.PORT || 5050
app.listen(port,()=>console.log(`server running on `+ port))