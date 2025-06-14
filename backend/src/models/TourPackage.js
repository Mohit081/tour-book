import mongoose from "mongoose";

const tourPackageSchema = new mongoose.Schema({
  title: String,
  image: String,
});

const TourPackage = mongoose.model("TourPackage", tourPackageSchema);

export default TourPackage;
