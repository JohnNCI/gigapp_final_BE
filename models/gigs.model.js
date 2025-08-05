const mongoose = require("mongoose");
const { GENRES, VENUE_TYPES } = require("../config/constant");

const gigsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    venueType: {
      type: String,
      enum: Object.values(VENUE_TYPES),
      
      required: true,
    },

    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Songs", default: [] }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Gigs", gigsSchema);
