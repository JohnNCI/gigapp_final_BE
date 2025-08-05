const Gigs = require("../models/gigs.model");

class GigsService {
  async create(data) {
    const gigs = new Gigs({
      ...data,
    });
    return await gigs.save();
  }

  async findAll() {
    const gigs = await Gigs.find().populate("songs");

    return gigs;
  }

  async findOne(id) {
    return await Gigs.findById(id).populate("songs").exec();
  }

  async update(id, data) {
    const updatedGigs = await Gigs.findByIdAndUpdate(id, data, {
      new: true,
    }).exec();
    return updatedGigs;
  }

  async remove(id) {
    console.log(id);
    await Gigs.findByIdAndDelete(id).exec();
  }

  async addSongsToGig(id, songsIDs) {
    //identify the gig based on gig ID- constant var gig, GIgs is mongoose model use method
    // findByID.
    const gig = await Gigs.findById(id);
    // condition if couldt find the gig - send message gig not found
    if (!gig) return { message: "Gig not found." };

    // Avoid duplicates / ID from FE, getting - using JS function filters -
    //filtering
    const newSongIds = songsIDs.filter((id) => !gig.songs.includes(id));

    gig.songs.push(...newSongIds);
    return await gig.save();
  }


  async deleteSongFromGig(id, songID) {
    //identify the gig based on gig ID- constant var gig, GIgs is mongoose model use method
    // findByID.
    const gig = await Gigs.findById(id);
    // condition if couldt find the gig - send message gig not found
    if (!gig) return { message: "Gig not found." };

    // Avoid duplicates / ID from FE, getting - using JS function filters -
    //filtering
    gig.songs = gig.songs.filter(sId => sId.toString() !== songID);
    return await gig.save();

  }

}

module.exports = new GigsService();
