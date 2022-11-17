const express = require("express")
const mongoose = require('mongoose')
const shortUrl = require("./models/shortUrl")
const shortUrl = require("./models/shortUrl")
const app = express()
const ShortUrl = require('./models/shortUrl')
mongoose.connect('mongodb://localhost/urlShortener', {
    useNewUrlParser: true, useUnifiedTopology: true
})



app.set('view engine','ejs')
app.use(express.urlencoded({extended: false}))
app.get('/', async (req,res) => {
    const shortUrl = await shortUrl.find()
   res.render('index', {shortUrl:shortUrl})
})
app.post('/shortUrl', async (req,res) => {   //for waiting
   await ShortUrl.create({full: req.body.fullUrl})

   res.redirect('/') //go back to homepage
})
app.listen(process.env.PORT || 5000);