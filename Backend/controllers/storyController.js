const stories = require("../db/connect");
const storySchema = require("../db/models/storySchema");

class storyControler {
  async addStory(req, res, next) {
    let { title, content, author } = req.body;
    let date = new Date(Date.now());
    date = date.toISOString().replace("T", " ").split(".")[0];

    if (!author || author.trim() === "") {
      author = "Anonymous";
    }

    try {
      await storySchema.validate({ title, content, date, author });
      const newStory = { title, content, date, author };
      const created = await stories.insert(newStory);

      res.json(created);
    } catch (error) {
      next(error);
    }
  }

  async getAllStories(req, res, next) {
    try {
      let titles = await stories.find({});
      res.json(titles);
    } catch (error) {
      next(error);
    }
  }

  async getOneStory(req, res, next) {
    const { id } = req.params;
    try {
      let story = await stories.find({ _id: id });
      res.json(story);
    } catch (error) {
      next(error);
    }
  }

  async getRandomStory(req, res, next) {
    try {
      let sample = await stories.aggregate([{ $sample: { size: 1 } }]);
      res.json(sample);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new storyControler();
