/* eslint-disable no-undef */
const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const buah = [
        {name: 'apel'},
        {name: 'melon'},
        {name: 'melon'}
    ]

    res.render('index', {
        nama : 'achmad megantara',
        umur : 24,
        buah : buah
    })
})
app.get('/:name', (req,res) => res.send(`Nama saya : ${req.params.name}`))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

