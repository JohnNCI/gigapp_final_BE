const express = require("express");
const router = express.Router();
const gigsController = require("../../controllers/gigs.controller");
//const { isAuth, isAdmin, isClient } = require("../../auth-middleware/check");

// Route to create a new gigs
router.post("/", gigsController.create);

// Route to update an existing gigs
router.put("/:id", gigsController.update);

// Route to get all gigss
router.get("/", gigsController.findAll);

// Route to get a gigs by ID
router.get("/:id", gigsController.findOne);

// Route to delete a gigs
router.delete("/:id", gigsController.remove);

// Route to add songs to a gig 
router.put("/:id/add-songs", gigsController.addSongsToGig);

// Route to delete a song from a gig 
router.put("/:id/delete-song", gigsController.deleteSongFromGig);





module.exports = router;



