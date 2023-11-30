const router = require("express").Router();

const controllerVehicle = require("../controllers/vehicle");

const validator = require("../validation/validator");


router.get("/", controllerVehicle.getVehicle);

router.get("/:id", controllerVehicle.getVehicleById);

router.post("/",
    validator.validateVehicle(),
    validator.validate,
    controllerVehicle.createVehicle);

router.put("/:id",
    validator.validateVehicle(),
    validator.validate,
    controllerVehicle.updateVehicleById);

router.delete("/:id", controllerVehicle.deleteVehicleById);

module.exports = router;