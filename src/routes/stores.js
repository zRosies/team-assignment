const route = require ('express').Router();
const stores  = require('../controllers/stores')

route.get('/', stores.getAllStores);
route.get('/:id', stores.getStoreById);
route.put('/:id', stores.putStore);
route.post('/', stores.postStore);
route.delete('/:id', stores.deleteStore);

module.exports = route