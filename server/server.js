const express = require ('express');
const app = express();
const { Pool } = require('pg');

const port = 3001;

const pool = new Pool({
    user: 'postgres',
    host: 'http://localhost:3001',
    database: 'wedding-wizard',
})

app.get("/testcard", (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/json');
        res.json({
            "Title": "Test Card",
            "Update": "No Progress Made Yet",
            "Cost": "$155",
            "Due_By": "Wedding Date",
            "Category": "Entertainment",
            "Payment_Status": "Unpaid",
            "Owner": "Jason"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})