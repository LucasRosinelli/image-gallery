const Post = require('../models/Post');

module.exports = {
  async index(request, response) {
    const posts = await Post.find().sort('-createdAt');

    return response.json(posts);
  },

  async create(request, response) {
    const {author, place, description, hashtags} = request.body;
    const {filename: imageUrl} = request.file;

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      imageUrl,
    });

    return response.json(post);
  },
};
