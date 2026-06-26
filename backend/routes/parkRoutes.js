//khai bao
const express = require("express");

const router = express.Router();

const parkControllers = require("../controllers/parkController");

router.get("/", parkController.getAllParks);

router.get("/:id", parkController.getParkById);

router.post("/", parkController.createPark);

router.put("/:id", parkController.updatePark);

router.delete("/:id", parkController.deletePark);

module.exports = router;