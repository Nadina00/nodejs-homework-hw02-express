const mongoose = require("mongoose");

const connectMongo = async () => {
  await mongoose.connect(process.env.MONGO_URL);
};
module.exports = { connectMongo };
