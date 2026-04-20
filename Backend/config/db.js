const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://yt:yt12345@backend.gv9ejdb.mongodb.net/roboticsDB?retryWrites=true&w=majority");
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;