const mongoose = require("mongoose");
const { GENRES, VENUE_TYPES } = require("../config/constant");

const songsSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    artist: {
      type: String,
      required: false,
    },
    coverImage: {
      type: String,
      required: false,
    },

    genres: {
      type: [String],
      enum: Object.values(GENRES),
      default: [],
      required: true,
    },

    venueTypes: {
      type: [String],
      enum: Object.values(VENUE_TYPES),
      default: [],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Songs", songsSchema);
