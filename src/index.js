const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/ice-breakers', (req, res) => {
    res.send([ "test", "test", "test" ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});