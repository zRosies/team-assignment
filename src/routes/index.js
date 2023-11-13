const router = require("express").Router();
// const employees = require('./employees');
// const swagger = require('./swagger');
// const user = require('./user')
const storesRoute = require("./stores");
const employee = require("./employees");

router.use("/stores", storesRoute);
router.use("/employee", employee);

module.exports = router;
