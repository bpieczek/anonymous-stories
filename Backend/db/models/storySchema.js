const yup = require("yup");

const storySchema = yup.object().shape({
  title: yup.string().max(25).trim().required(),
  content: yup.string().trim().required(),
  date: yup.date().required(),
});

module.exports = storySchema;
