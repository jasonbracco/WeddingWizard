const express = require("express");
const app = express();
const { Pool } = require("pg");

const port = 3001;

const pool = new Pool({
  user: "jasonbracco",
  host: "localhost",
  database: "wedding_wizard",
  password: "Jbroc2121!",
  port: 5433,
});

app.use(express.json());

app.post("/createCard", async (req, res) => {
  try {
    const { title, update, cost, dueDate, category, paymentStatus, owner } = req.body;

    const result = await pool.query(
      'INSERT INTO cards (title, update_text, cost_associated, due_date, category, payment_status, owner) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [title, update, cost, dueDate, category, paymentStatus, owner]
    );

    const newCard = result.rows[0];

    res.status(201).json(newCard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error " });
  }
});

app.get("/testcard", (req, res) => {
  try {
    res.setHeader("Content-Type", "application/json");
    res.json({
      Title: "Test Card",
      Update: "No Progress Made Yet",
      Cost: "$155",
      Due_By: "Wedding Date",
      Category: "Entertainment",
      Payment_Status: "Unpaid",
      Owner: "Jason",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
