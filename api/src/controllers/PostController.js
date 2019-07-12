const fileSystem = require('fs');
const path = require('path');
const sharp = require('sharp');
const Post = require('../models/Post');

module.exports = {
  async getAll(request, response) {
    const posts = await Post.find().sort({createdAt: -1});

    return response.json(posts);
  },

  async getById(request, response) {
    const id = request.params.id;
    const post = await Post.findById(id);

    return response.json(post);
  },

  async getByAuthor(request, response) {
    const author = request.params.author;
    const posts = await Post.find({
      author,
    }).sort({createdAt: -1});

    return response.json(posts);
  },

  async create(request, response) {
    const {author, place, description, hashtags} = request.body;
    const {filename: imageUrl} = request.file;

    const [fileName] = imageUrl.split('.');
    const generatedName = `${fileName}.jpg`;

    await sharp(request.file.path)
        .resize(500)
        .jpeg({quality: 85})
        .toFile(
            path.resolve(request.file.destination, 'resized', generatedName),
        );

    fileSystem.unlinkSync(request.file.path);

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      generatedName,
    });

    request.io.emit('post', post);

    return response.json(post);
  },

  async like(request, response) {
    const id = request.params.id;
    const post = await Post.findById(id);

    if (post) {
      post.likes += 1;

      await post.save();

      request.io.emit('like', post);
    }

    return response.json(post);
  },
};
