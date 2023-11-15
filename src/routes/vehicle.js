const router = require("express").Router();

const controllerVehicle = require("../controllers/vehicle");

router.get("/", controllerVehicle.getVehicle);

router.get("/:id", controllerVehicle.getVehicleById);

router.post("/", controllerVehicle.createVehicle);

router.put("/:id", controllerVehicle.updateVehicleById);

router.delete("/:id", controllerVehicle.deleteVehicleById);

module.exports = router;
