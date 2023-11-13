const router = require('express').Router();
// const employees = require('./employees');
// const swagger = require('./swagger');
// const user = require('./user')
const storesRoute = require ('./stores')

router.use ('/stores', storesRoute)

module.exports = router;
