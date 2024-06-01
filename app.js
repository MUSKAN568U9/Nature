const express = require('express');
const app = express();
const path = require('path');

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/' , (req, res) => {
    res.render('home.ejs')
})

app.get('/news', (req,res) => {
    res.render('news')
})

app.get('/blogs' , (req,res) => {
    res.render('blogs')
})

app.get('/portfolio' , (req,res) => {
    res.render('portfolio')
})

app.get('/prep' , (req,res) => {
    res.render('prep')
})

app.listen(3000 , () => {
    console.log("LISTENING ON PORT 3000")
})