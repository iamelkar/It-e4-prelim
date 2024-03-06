const express = require('express')
const app = express()

const port = 8000;

app.use((req, res, next) => {
    console.log('Request made')
    console.log(`Host: ${req.hostname}`)
    console.log(`Path: ${req.path}`)
    console.log(`Method: ${req.method}`)
    next()
})

app.get('/', function (req, res) {
  res.sendFile('./views/home.html', {root: __dirname});
})

app.get('/about', function (req, res) {
    res.sendFile('./views/about.html', {root: __dirname});
})

app.get('/game', function (req, res) {
    res.sendFile('./views/game.html', {root: __dirname});
})

app.get('/portfolio', function (req, res) {
    res.sendFile('./views/portfolio.html', {root: __dirname});
})

app.get('/tetris', function (req, res) {
    res.sendFile('./views/tetris.html', {root: __dirname});
})

app.get('/tictactoe', function (req, res) {
    res.sendFile('./views/tictactoe.html', {root: __dirname});
})

app.get('/index', (req,res) =>{
    res.redirect('/');
})

app.get('/home', (req,res) =>{
    res.redirect('/');
})

app.get('/aboutus', (req,res) =>{
    res.redirect('/about');
})

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})

app.use((req, res) => {
    res.status(404).sendFile('./views/error.html', {root: __dirname});
})