const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('./src/connection/db')
const routes = require('./src/routes/index')
const PORT = process.env.PORT;
const app = express();



app.use(bodyParser.json())
    .use(cors({origin: '*'}))
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      })
    .use('/', routes)


mongodb.initDb((err, mongodb) => {
      if (err) {
        console.log(err);
      } else {
        app.listen(PORT);
        console.log(`Connected to DB and listening on ${PORT}`);
      }
  });
