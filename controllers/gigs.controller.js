
const {
  create,
  findAll,
  findOne,
  update,
  remove,
  addSongsToGig,
  deleteSongFromGig
} = require("../services/gigs.service");

// Create a gigs
exports.create = async (req, res) => {
  try {
    console.log(req.body);
    const gigs = await create(req.body);
    res.status(201).json(gigs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Find all gigs with optional query parameters
exports.findAll = async (req, res) => {
  try {
    const gigs = await findAll();
    res.status(200).json(gigs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Find a gigs by ID
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const gigs = await findOne(id);
    console.log("test",gigs)
      res.status(200).json(gigs);
  } catch (error) {
    console.log("test2",error)
    res.status(500).json({ message: error.message });
  }
};

// Update a gigs by ID
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedPlace = await update(id, req.body);
    res.status(200).json(updatedPlace);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a gigs by ID
exports.remove = async (req, res) => {
  try {
    const id = req.params.id;
    await remove(id);
    res.status(201).json({ message: "Gig has been Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



//  Add songs to a gig
exports.addSongsToGig = async (req, res) => {
  try {
    const id = req.params.id;
    await addSongsToGig(id,req.body.songsIDs);
    res.status(201).json({ message: "Songs have been added sucessfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



//  Delete a song from a gig
exports.deleteSongFromGig = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteSongFromGig(id,req.body.songID);
    res.status(201).json({ message: "Song has been deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};