import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number
});

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;
