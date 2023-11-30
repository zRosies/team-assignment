const router = require("express").Router();
const path = require("path");
const swagger = require("./swagger");
const storesRoute = require("./stores");
const employee = require("./employees");
const vehicle = require("./vehicle");
const oauth = require("../oauth/oauth");
const vehicleMaintenance = require("./vehicleMaintenance");
const user = require("./users");

router.use("/stores", storesRoute);
router.use("/employee", employee);
router.use("/vehicle", vehicle);
router.use("/maintenance", vehicleMaintenance);
router.use("/api-docs", swagger);
router.use("/user", user);
router.use("/", oauth);

//------defining views---------
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
router.get("/account", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/logged-git.html"));
});
router.get("/account-google", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/logged-google.html"));
});

router.get("/denied", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/denied.html"));

  setTimeout(() => {
    console.log("aaa");
  }, 3000);
});

module.exports = router;
