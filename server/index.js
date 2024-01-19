const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT | 3000;

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  console.log("WOrking");
  res.status(200).json({ message: "Home route working " });
});

app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
});
