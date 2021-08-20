var mongoose = require("mongoose");

var Config = require("../config/app.config");

exports.connect = () => {
  mongoose.connect(
    Config.config.MONGO_URL,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to database");
      }
    }
  );
};
