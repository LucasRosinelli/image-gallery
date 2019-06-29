const Post = require('../models/Post');

module.exports = {
  async index(request, response) {
    return response.json({
      ok: true,
    });
  },

  async create(request, response) {
    const {author, place, description, hashtags} = request.body;
    const {filename: image} = request.file;

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image,
    });

    return response.json(post);
  },
};
