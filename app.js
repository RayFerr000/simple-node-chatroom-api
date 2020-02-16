const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = parseInt(process.env.PORT, 10) || 5000;

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

app.get('/db', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    const results = { 'results': (result) ? result.rows : mull };
    res.send('THESE ARE THE QUERY RESULTS ' + results);
    client.release();
  } catch (err) {
    console.error(err);
    res.send('Error ' + err);
  }
})
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
