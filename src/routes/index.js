const router = require("express").Router();
// const employees = require('./employees');
const swagger = require("./swagger");
// const user = require('./user')
const storesRoute = require("./stores");
const employee = require("./employees");
const vehicle = require("./vehicle");
const vehicleMaintenance = require("./vehicleMaintenance");

router.use("/stores", storesRoute);
router.use("/employee", employee);
router.use("/vehicle", vehicle);
router.use("/maintenance", vehicleMaintenance);
router.use("/api-docs", swagger);

module.exports = router;
