const express = require ('express');
const proxy = require('http-proxy-middleware');
const path = require('path');
const PORT = 4000;

const app = express();

app.use(express.static(path.resolve(__dirname, '../static')));

// put everyone else's stuff here?
app.use();
app.use();
app.use();

app.listen(PORT, () => console.log('App is listening on PORT ', PORT));
