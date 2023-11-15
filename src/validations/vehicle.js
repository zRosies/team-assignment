const { body, param } = require("express-validator");

const vehicleDataValidate = [
    body("brand")
    .exists()
    .isString()
    .withMessage("Enter brand as a string."),
    body("model")
    .exists()
    .isString()
    .withMessage("Enter model as a string."),
    body("horse_power")
    .exists()
    .isString()
    .withMessage("Enter number of horse power as a string."),
    body("fuel_type")
    .exists()
    .isString()
    .withMessage("Enter fuel as a string"),
    body("color")
    .exists()
    .withMessage("Enter category as a string.")
    .isString(),
    body("transmission")
    .exists()
    .isString()
    .withMessage("Enter transmission as a string."),
    body("number_passenger")
    .exists()
    .isString()
    .withMessage("Enter number of passsenger as a string."),
];

const vehicleIdValidate = [
    param("id")
    .exists()
    .custom((value) => {
        if (value.length !== 24) {
            return Promise.reject("The Id should have 24 caracters.");
        } else {
            return true;
        }
    })
    .withMessage("The number of caracters must be 24")
]


module.exports = { vehicleIdValidate, vehicleDataValidate };