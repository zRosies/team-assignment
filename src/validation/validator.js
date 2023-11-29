const validator = require("express-validator");

// -------- here you set the rule for your application
const validateEmployee = () => {
  return [
    validator.check("firstName", "Name is required").not().isEmpty(),
    validator.check("lastName", "Name is required").not().isEmpty(),
    validator
      .check("admission_date", "Admission date is required")
      .not()
      .isEmpty(),
    validator
      .check("phone", "Phone number is required and must be a number")
      .isNumeric(),
    validator
      .check("email", "Email is required")
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: true }),
    validator.check("address", "Address is required").not().isEmpty(),
  ];
};

const validateUser = () => {
  return [
    validator.check("firstName", "Name is required").not().isEmpty(),
    validator.check("lastName", "Name is required").not().isEmpty(),
    validator
      .check("phone", "Phone number is required and must be a number")
      .isNumeric(),
    validator
      .check("email", "Email is required")
      .isEmail()
      .normalizeEmail({ gmail_remove_dots: true }),
    validator.check("address", "Address is required").not().isEmpty(),
  ];
};

const validateStore = () => {
  return [
    validator.check("address", "Address is required").not().isEmpty(),
    validator.check("email", "Email is required").isEmail(),
    validator
      .check("manager_name", "Manager Name  is required")
      .not()
      .isEmpty(),
    validator
      .check("phone_number", "Phone number is required and must be a number")
      .isNumeric(),
    validator.check("office_hours", "Office Hours is required").not().isEmpty(),
  ];
};

const validateVehicleMaintenance = () => {
  return [
    body("vehicle")
      .exists({ checkFalsy: true })
      .withMessage("Vehicle name is required")
      .isString()
      .withMessage("Vehicle name should be string")
      .isLength({ min: 3 })
      .withMessage("Vehicle name should be at least 3 characters"),
    body("date").not().notEmpty().withMessage("Maintenance date required"),
    body("mileage")
      .not()
      .notEmpty()
      .withMessage("Vehicle mileage required")
      .isInt()
      .withMessage("Vehicle mileage must be a number"),
    body("lubrication")
      .exists()
      .withMessage("Status of vehicle lubrication must not be empty")
      .isString()
      .withMessage("Vehicle lubrication status must be a string")
      .isIn([
        "Done",
        "done",
        "Next visit",
        "Next Visit",
        "next visit",
        "No need",
        "no need",
        "No Need",
      ])
      .withMessage("Vehicle lubrication invalid value"),
    body("brakes")
      .exists()
      .withMessage("Status of vehicle brakes must not be empty")
      .isString()
      .withMessage("Vehicle brakes status must be a string")
      .isIn([
        "Done",
        "done",
        "Next visit",
        "Next Visit",
        "next visit",
        "No need",
        "no need",
        "No Need",
      ])
      .withMessage("Vehicle brakes invalid value"),
    body("tires")
      .exists()
      .withMessage("Status of vehicle tires must not be empty")
      .isString()
      .withMessage("Vehicle tires status must be a string")
      .isIn([
        "Done",
        "done",
        "Next visit",
        "Next Visit",
        "next visit",
        "No need",
        "no need",
        "No Need",
      ])
      .withMessage("Vehicle tires invalid value"),
    body("suspension_system")
      .exists()
      .withMessage("Status of vehicle suspension system must not be empty")
      .isString()
      .withMessage("Vehicle suspension system status must be a string")
      .isIn([
        "Done",
        "done",
        "Next visit",
        "Next Visit",
        "next visit",
        "No need",
        "no need",
        "No Need",
      ])
      .withMessage("Vehicle suspension system invalid value"),
    body("disponibility")
      .isBoolean()
      .withMessage("Disponibility only accepts boolean values (true/false)"),
  ];
};

// --------------- Here you just put the validate function beside your rule above in the route you want to validate -------------

const validate = (req, res, next) => {
  const errors = validator.validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];

  errors.array().map((err) => {
    extractedErrors.push({
      [err.msg]: err.msg,
    });
  });

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  validate,
  validateEmployee,
  validateUser,
  validateStore,
  validateVehicleMaintenance,
};
