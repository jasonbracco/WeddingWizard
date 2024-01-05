require('dotenv').config();
const express = require("express");
const app = express();
const { Pool } = require("pg");

const port = 3001;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(express.json());

app.post("/createcard", async (req, res) => {
  try {
    const { title, update, cost_associated, due_date, category, paymentStatus, owner, status } = req.body;

    const result = await pool.query(
      'INSERT INTO cards (title, update_text, cost_associated, due_date, category, payment_status, owner, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [title, update, cost_associated, due_date, category, paymentStatus, owner, status]
    );

    const newCard = result.rows[0];
    console.log

    res.status(201).json(newCard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/getallcards', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT id, title, update_text, cost_associated, to_char(due_date, \'MM/DD/YYYY\') AS due_date, category, payment_status, owner, status FROM cards'
        );
        const cards = result.rows;
        res.json(cards);
    } catch (error) {
        console.error('Error fetching cards', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/updatecard/:id', async (req, res) => {
    try {
        const cardId = req.params.id;
        const updatedCard = req.body

        const result = await pool.query(
            'UPDATE cards SET title = $1, update_text = $2, cost_associated = $3, due_date = $4, category = $5, payment_status = $6, owner = $7, status = $8 WHERE id = $9 RETURNING *',
            [updatedCard.title, updatedCard.update, updatedCard.cost, updatedCard.dueDate, updatedCard.category, updatedCard.paymentStatus, updatedCard.owner, updatedCard.status, cardId]
        )
        const updatedCardData = result.rows[0];
        res.json(updatedCardData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.delete('/deletecard/:id', async (req, res) => {
  try {
    const cardId = req.params.id;

    const result = await pool.query(
      `DELETE FROM cards WHERE id = $1`,
      [cardId]
    )

    res.json({ success: true, message: "Card Deleted" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
