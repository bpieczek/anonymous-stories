const express = require("express");
const router = express.Router();

const storyController = require("../controllers/storyController");
router.get("/random", storyController.getRandomStory);

router.get("/", storyController.getAllStories);
router.get("/:id", storyController.getOneStory);

router.post("/add", storyController.addStory);

module.exports = router;
