const mongoose = require('mongoose');

// Allows connection with database
const dbConnection = (app) => {
    const DB = process.env.DB;
    mongoose
      .connect(DB)
      .then((res) => {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log("listening on port: " + PORT);
        })
        console.log("connection successfully");
      })
      .catch((err) => console.log("something went wrong: " + err.message))
  }

module.exports = dbConnection;