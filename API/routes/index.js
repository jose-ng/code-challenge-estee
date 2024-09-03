/**
 * This is the index routing file for the Node.js API.
 * It sets up the main routes for the application by linking
 * specific endpoints to their respective routers.
 */
const trucksRouter = require('./trucks.router');

/**
 * Function to configure the API routes.
 * @param {object} app - The Express application instance
 */
function routerApi(app) {
  app.use('/api/trucks', trucksRouter);
}

module.exports = routerApi;
