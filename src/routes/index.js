const router = require("express").Router();
const yourroute = require("./yourroute");

router.use("/", yourroute);
// router.use('')

module.exports = router;
