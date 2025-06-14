import Destination from "../models/Destination.js";
import TourPackage from "../models/TourPackage.js";

export const getAllTourPackages = async (req, res) => {
    console.log('hello')
  try {
    const packages = await TourPackage.find();
    res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch tour packages", error });
  }
};

export const getAllPopularDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch destinations", error });
  }
};

