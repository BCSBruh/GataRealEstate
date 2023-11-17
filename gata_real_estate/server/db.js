var mongoose = require("mongoose");

const infoSchema = new mongoose.Schema({
  beds: Number,
  baths: Number,
  sqft: Number,
});

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: Number,
});

const realtorSchema = new mongoose.Schema({
  name: String,
  mls: Number,
});

const bottomInfoSchema = new mongoose.Schema({
  price: String,
  info: [infoSchema],
  address: [addressSchema],
  realtor: [realtorSchema],
});

const houseSchema = new mongoose.Schema({
  _id: String,
  href: String,
  listingDate: String,
  bottomInfo: [bottomInfoSchema],
});

const house = mongoose.model("house", houseSchema);

const connectDB = async () => {
  var homes = [];
  try {
    await mongoose.connect(process.env.URI);
    console.log(`MongoDB Connected : ${mongoose.connection.host}`);
    return house.find();
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
