const express = require('express');
const mysql = require('mysql2');
const app = express();

// Middleware to parse JSON data
app.use(express.json());
app.use(express.static('public'));  // assume HTML files are in a "public" folder


// Connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',  // use your actual password
    database: 'real_estate'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// Simple route
app.get('/', (req, res) => {
    res.send('Hello from Node.js server with MySQL!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
// add post route for adding data
app.post('/add-user', (req, res) => {
    const { username, password, email } = req.body;
    const query = 'INSERT INTO users (username, password, email) VALUES (?, ?, ?)';
    db.query(query, [username, password, email], (err, result) => {
        if (err) throw err;
        res.send('User added successfully!');
    });
});
