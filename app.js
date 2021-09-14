const express = require('express');
const mongoose = require('mongoose');
const app = express();
const morgan = require('morgan');

// Imports Routes.
const authRoutes = require('./routes/authRoutes')

// add view engine
app.set('view engine', 'ejs')
app.set('views', 'views')

// set middleware
const middleware = [
    morgan('dev'),
    express.urlencoded({extended: true}),
    express.json()
]
app.use(middleware)
app.use('/auth', authRoutes)

// serve static files
app.use(express.static('public'))

// port number
const port = process.env.PORT || 3000;

// Database information
const username= 'admin'
const password= 'admin'
const db_name='exp-blog'
const URL = `mongodb+srv://${username}:${password}@cluster0.19f5u.mongodb.net/${db_name}?retryWrites=true&w=majority`

// Handle Request
app.get('/', (req, res) => {
    res.end(`<h1>Welcoe form the local server...!</h1>`)
    // res.render('pages/auth/signup', {title: 'Create a new account'})
})

mongoose.connect (URL)
.then(() => {
    console.log('Database connected')
    app.listen(port, ()=> {
        console.log('Server is listening on port: ' + port)
    })
})
.catch(err => {
    console.log(err)
})