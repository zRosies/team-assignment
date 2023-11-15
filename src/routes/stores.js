const route = require("express").Router();
const stores = require("../controllers/stores");
const { validateStore, validate } = require("../validation/validator");

route.get("/", stores.getAllStores);
route.get("/:id", stores.getStoreById);
route.put("/:id", validateStore(), validate, stores.putStore);
route.post("/", validateStore(), validate, stores.postStore);
route.delete("/:id", stores.deleteStore);

module.exports = route;
