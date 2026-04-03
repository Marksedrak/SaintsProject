const express = require("express");
const cors = require("cors");
const db = require("better-sqlite3")("database.db");
db.pragma("journal_mode = WAL");

// Database setup

const createTables = db.transaction(() => {
  db.prepare(
    `
    CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username STRING NOT NULL UNIQUE,
    password STRING NOT NULL  
    )`,
  ).run();
});

createTables();

// End Database setup

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/data", async (req, res) => {
  // Handle Login attempt
  const { username, password } = req.body;
  console.log(`${username}, ${password}`);
  // Validate username and password

  // Send response back to frontend
  db.prepare(`INSERT INTO users (username, password) VALUES (?, ?)`).run(
    username,
    password,
  );

  db.prepare(`SELECT * FROM users`)
    .all()
    .forEach((row) => {
      console.log(row);
    });
  res.status(200).json({
    text: `Username: ${username}\nPassword: ${password}`,
  });
});

app.get("/api/data", async (req, res) => {
  res.send("Hello from the backend!");
});

app.listen(3000);
