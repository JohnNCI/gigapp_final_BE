const express = require("express");
const router = express.Router();
const songsController = require("../../controllers/songs.controller");
//const { isAuth, isAdmin, isClient } = require("../../auth-middleware/check");

// Route to create a new songs
router.post("/", songsController.create);

// Route to update an existing songs
router.put("/:id", songsController.update);

// Route to get all songss
router.get("/", songsController.findAll);

// Route to get a songs by ID
router.get("/:id", songsController.findOne);

// Route to delete a songs
router.delete("/:id", songsController.remove);

module.exports = router;



