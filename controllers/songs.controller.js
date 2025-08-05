const { STATUS } = require("../config/constant");
const {
  create,
  findAll,
  findOne,
  update,
  remove,
} = require("../services/songs.service");

// Create a songs
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const songs = await create(req.body);
    res.status(201).json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find all songs with optional query parameters
exports.findAll = async (req, res) => {
  try {
    const songs = await findAll();
    res.status(200).json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Find a songs by ID
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const songs = await findOne(id);
    console.log("test",songs)
      res.status(200).json(songs);
  } catch (error) {
    console.log("test2",error)
    res.status(500).json({ message: error.message });
  }
};

// Update a songs by ID
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPlace = await update(id, req.body);
    res.status(200).json(updatedPlace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a songs by ID
exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    await remove(id);
    res.status(201).json({ message: "Song has been Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
