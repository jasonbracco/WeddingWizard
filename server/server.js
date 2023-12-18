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
    const { title, update, cost, dueDate, category, paymentStatus, owner, status } = req.body;

    const result = await pool.query(
      'INSERT INTO cards (title, update_text, cost_associated, due_date, category, payment_status, owner, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [title, update, cost, dueDate, category, paymentStatus, owner, status]
    );

    const newCard = result.rows[0];

    res.status(201).json(newCard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error " });
  }
});

app.get('/getallcards', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT id, title, update_text, cost_associated, to_char(due_date, \'MM/DD/YYYY\') AS formatted_due_date, category, payment_status, owner, status FROM cards'
        );
        const cards = result.rows;
        res.json(cards);
    } catch (error) {
        console.error('Error fetching cards', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
