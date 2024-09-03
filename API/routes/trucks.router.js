/**
 * This is the routing file for trucks-related API endpoints in a Node.js application.
 * It defines the routes for CRUD operations on trucks entities and links them to the appropriate service methods.
 */
const TrucksService = require('../services/trucks.service');
const express = require('express');
const router = express.Router();
const trucksService = new TrucksService();

/**
 * Route to get a list of trucks.
 * Supports query, and limit parameters.
 */
router.get('/',
  async (req, res, next) => {
    try {
      const { query, limit } = req.query;
      const result = await trucksService.getAll(query, limit);
      res.json(result);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
