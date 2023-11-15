const route = require("express").Router();
const employees = require("../controllers/employee");
const validator = require("../validation/validator");

route.get("/", employees.getAllEmployees);
route.get("/:id", employees.getEmployeeById);
route.delete("/:id", employees.deleteEmployee);

route.post(
  "/",
  validator.validateEmployee(),
  validator.validate,

  employees.createEmployee,
);
route.put(
  "/:id",
  validator.validateEmployee(),
  validator.validate,
  employees.updateEmployee,
);

module.exports = route;
