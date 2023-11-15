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

// --------------- Here you just put the validate function beside your rule above in the route you want to validate -------------

const validate = (req, res, next) => {
  const errors = validator.validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];

  errors.array().map((err) => {
    extractedErrors.push({ [err.msg]: err.msg });
  });

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = { validate, validateEmployee };
