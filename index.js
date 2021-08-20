var express = require("express");

var cors = require("cors");

var DB = require("./config/db.config");
var Config = require("./config/app.config");
var postRouter = require("./routes/posts.route");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

DB.connect();

app.use(cors());
app.use("/api/posts", postRouter);
// app.use('/admin',ProductRouter);

app.listen(Config.config.PORT, () => {
  console.log("Server started on port no : " + Config.config.PORT);
});

module.exports = app;
