/* eslint-disable no-undef */
const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})
app.get('/:name', (req,res) => res.send(`Nama saya : ${req.params.name}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
