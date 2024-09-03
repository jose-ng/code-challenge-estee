// Import the express module
const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

// Create an instance of an Express application
const app = express();

// for parsing application/json
app.use(express.json()); 

// cors
const whitelist = [
  'https://website-prod.com',
  'http://localhost:5173' // local environment
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};
app.use(cors(corsOptions));

// API's
routerApi(app);

// Set the port the server will listen on
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});