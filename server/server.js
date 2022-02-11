require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// app.use(express.static(path.join(__dirname,"../client")));

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
});


// rollbar.log("Hello world!");


app.get("/", (req, res) => {
    try {
      messItUp();
    } catch (err) {
      console.log("NOW YOU KNOW YOURE WRONG" + err.stack);
      rollbar.log("SEE DANIEL IT WORKS " + err.stack)
    }
  rollbar.info("someone IN YOUR BIZ ");
  console.log('how is it going')
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

const port = process.env.PORT || 5050;
app.listen(port, () => console.log(`server running on ` + port));
