const router = require("express").Router();
// const employees = require('./employees');
const path = require("path");
const swagger = require("./swagger");
// const user = require('./user')
const storesRoute = require("./stores");
const employee = require("./employees");
const vehicle = require("./vehicle");
const oauth = require("../oauth/oauth");
const vehicleMaintenance = require("./vehicleMaintenance");

router.use("/stores", storesRoute);
router.use("/employee", employee);
router.use("/vehicle", vehicle);
router.use("/maintenance", vehicleMaintenance);
router.use("/api-docs", swagger);
router.use("/", oauth);
router.get("/", (req, res) => {
  // Using path.join to create an absolute path to the index.html file
  res.sendFile(path.join(__dirname, "../front/index.html"));
});
router.get("/account", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/logged.html"));
});

router.get("/denied", (req, res) => {
  res.sendFile(path.join(__dirname, "../front/denied.html"));

  setTimeout(() => {
    console.log("aaa");
  }, 3000);
});

module.exports = router;
