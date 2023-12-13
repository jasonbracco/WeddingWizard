const express = require ('express');
const app = express();
const { Pool } = require('pg')

const port = 3001;

const pool = new Pool({
    user: 'jasonbracco',
    host: 'localhost',
    database: 'wedding-wizard',
    password: 'Jbroc2121!',
    port: 5433
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