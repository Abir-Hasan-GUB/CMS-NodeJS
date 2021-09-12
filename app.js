const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end(`<h1>Welcoe form the local server...!</h1>`)
})

const port = process.env.PORT || 3000;

app.connect(port, ()=> {
    console.log(`Server connected at port ${port}`)
})