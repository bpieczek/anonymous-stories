const monk = require("monk");
const { database } = require("../config");

const db = monk(database);
const stories = db.get("stories");

db.then(() => {
  console.log("Database connected");
});

module.exports = stories;
