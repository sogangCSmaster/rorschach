const express = require('express');
const app = express();

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
})

app.listen(3000, () => {
  console.log('Server Start');
})
