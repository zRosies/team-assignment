const route = require("express").Router();
const users = require("../controllers/user");
const validator = require("../validation/validator");

route.get("/", users.getAllUsers);
route.get("/:id", users.getUserById);
route.delete("/:id", users.deleteUser);

route.post(
    "/",
    validator.validateUser(),
    validator.validate,

    users.createUser,
);
route.put(
    "/:id",
    validator.validateUser(),
    validator.validate,
    users.updateUser,
);

module.exports = route;