const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log(process.env.DB_URI);
  mongoose.connect(process.env.DB_URI).then((data) => {
    console.log(`Mongodb is connected with server: ${data.connection.host}`);
  });
};

module.exports = connectDatabase;
