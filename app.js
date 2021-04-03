require("dotenv").config();

//Imports
const express = require("express");
const { json, urlencoded                                                                                                                                           } = require("body-parser");
const connect = require("./src/config/env/connect");
const morgan = require("morgan");
const user = require("./src/res/users/user.router");
const app = express();
const Port = process.env.PORT || 3000;

//use function
app.disable("x-powered-by");
app.use(json());
app.use(
  urlencoded({
    extended: true
  })
);

//Routes
app.get("", (req, res) => {
  res.send("hello hell");
});

//Serve Start Function

const start = async () => {
  try {
    await connect.connect();
    app.listen(Port, () => {
      console.log(`love u... ` + Port);
    });
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  start
};
