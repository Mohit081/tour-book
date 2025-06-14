import express from "express";
import { getAllPopularDestinations, getAllTourPackages } from "../controller/tourController.js";

const router = express.Router();

router.get("/selling", getAllTourPackages);
router.get("/destinations", getAllPopularDestinations);

export default router;
