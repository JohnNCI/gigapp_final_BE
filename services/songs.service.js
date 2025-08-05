const Songs = require("../models/songs.model");

class SongsService {
  async create(data) {
    const songs = new Songs({
      ...data,
    });
    return await songs.save();
  }

  async findAll() {
    const songs = await Songs.find().sort({title:1});

    return songs;
  }

  async findOne(id) {
    return await Songs.findById(id).exec();
  }

  async update(id, data) {
    const updatedSongs = await Songs.findByIdAndUpdate(id, data, {
      new: true,
    }).exec();
    return updatedSongs;
  }
  

  async remove(id) {
    console.log(id);
    await Songs.findByIdAndDelete(id).exec();
  }
}

module.exports = new SongsService();
