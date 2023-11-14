const express = require('express');
const router = express.Router();
const VMaintenanceController = require('../controllers/vehicleMaintenance');

router.get('/', VMaintenanceController.getAll);
router.get('/:id', VMaintenanceController.getSingle);
router.post('/', VMaintenanceController.createVehicleMaintenance);
router.put('/:id', VMaintenanceController.updateMaintenance);
router.delete('/:id', VMaintenanceController.deleteMaintenance);

module.exports = router;