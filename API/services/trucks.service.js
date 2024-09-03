const { URL, URLSearchParams } = require('url');
/**
 * This is the service file for trucks-related operations in a Node.js application.
 * It defines the business logic for CRUD operations on trucks entities.
 */

class TrucksService {
  constructor() { }

  /**
   * Retrieves a list of trucks.
   * @param {string} query - The search query to filter trucks.
   * @param {number} [limit=10] - The maximum number of trucks per page.
   * @returns {Array} - A list of trucks.
   */
  async getAll(offset = 100, limit = 100) {
    try {
      var url = new URL('https://data.sfgov.org/api/id/rqzj-sfat.json')
      let params = {
        $query: offset ? `select *, :id offset ${offset} limit ${limit}` : `select *, :id limit ${limit}`,
        $$query_timeout_seconds: 30,
      };
      url.search = new URLSearchParams(params).toString();
      const response = await fetch(url);
      const data = await response.json();

      return data;

    } catch (err) {
      throw new Error(err);
    }
  }
}

module.exports = TrucksService;
