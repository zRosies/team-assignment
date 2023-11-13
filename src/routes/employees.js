const route = require("express").Router();
const employees = require("../controllers/employee");

route.get("/", employees.getAllEmployees);
route.get("/:id", employees.getEmployeeById);
route.delete("/:id", employees.deleteEmployee);
route.post("/", employees.createEmployee);
route.put("/:id", employees.updateEmployee);

module.exports = route;
