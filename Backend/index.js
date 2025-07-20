const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { port } = require("./config");
const router = require("./routes/storiesRouter");

const app = express();

const corsOptions = {
  origin: ["http://localhost:9090", "https://anon-stories.onrender.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(morgan("tiny"));

app.use("/story", router);

app.use((error, req, res, next) => {
  if (error.status) res.status(error.status);
  else res.status(500);

  res.json({ message: error.message, stack: error.stack });
});

app.get("/health", (req, res) => res.status(200).send("OK"));

app.listen(port, () => {
  console.log(`It's alive on port ${port}`);
});
