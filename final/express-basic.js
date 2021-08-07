const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})
//다른 엔드포인트가 있는 url일 경우 
app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(8000, () => {
    console.log('server is listening on port 8000');
})