const express = require("express"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  morgan = require("morgan");

const app = express();
const port = process.env.PORT || 5000;
const models = require("./db");
const { answers, questions, user, tags, comments } = require("./routes/api");
const auth = require("./routes/auth/auth");

// MW
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api", [answers, questions, user, tags, comments]);

models.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("Server started on " + port);
  });
});
