const express = require('express');
const app = express();
const { people } = require('./data');

//static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({ extended: false }))
//parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people})
})

app.post('/api/people', (req, res) => {
    res.status(201).send('Success')
})

app.post('/login', (req, res) => {
    const { name } = req.body
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})
app.listen(8000, () => {
    console.log('server is listening on port 8000');
})