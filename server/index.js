const express = require("express"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server started on " + port);
});
