const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()



app.use(express.json())
app.use(cors())

app.use(express.static('client'))

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true
});

// record a generic message and send it to Rollbar
rollbar.log("Hello world!");


app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})
app.get('/',(req, res) => {
try{
     messItUp();

}catch(error){
    console.error(error)
}
})

const port = process.env.PORT || 5050
app.listen(port,()=>console.log(`server running on `+ port))