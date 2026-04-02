const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/data", async (req, res) => {
  // Handle Login attempt
  const { username, password } = req.body;
  console.log(`${username}, ${password}`);
  res
    .status(200)
    .json({ text: `Received username: ${username} and password: ${password}` });
});

app.get("/api/data", async (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(3000);
