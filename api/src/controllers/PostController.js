const Post = require('../models/Post');

module.exports = {
  async index(request, response) {
    return response.json({
      ok: true,
    });
  },

  async create(request, response) {
    return response.json({
      ok: true,
    });
  },
};
