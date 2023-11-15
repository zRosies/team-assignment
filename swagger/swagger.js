const swaggerAutogen = require("swagger-autogen");

const doc = {
  info: {
    title: "Renatal Cars",
    description:
      "his API is designed to manage and organize data within five key collections: Customers, Vehicles, Vehicle Maintenance,Employees and Stores ",
  },
  host: "http://localhost:7070",
  schemes: ["http"],
};
const outputFile = "./swagger.json";
const endpointsFiles = ["./src/routes/index.js"];
// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
