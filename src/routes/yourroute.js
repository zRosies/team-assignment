const express = require("express");

const contacts = require("../controllers/index");

const router = express.Router();

router.use("/test", contacts.getAllData);

module.exports = router;
