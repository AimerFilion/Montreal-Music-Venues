const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));

app.get("/hello", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "this is working well!",
  });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
