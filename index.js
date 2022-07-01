const express = require('express')
const app = express()
const User = require('./models/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

mongoose.connect('mongodb://localhost:27017/authdemo')
    .then(() => {
        console.log('mongo connection in open')
    })
    .catch(err => {
        console.log('mongo connection error')
        console.log(err)
    })

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12)
})

app.get('/secret', (req, res) => {
    res.send('this is secret! you cannot see me unless you are validates')
})

app.listen(3030, () => {
    console.log('server 3030 Running')
})