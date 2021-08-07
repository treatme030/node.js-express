const express = require('express');
const path = require('path');

const app = express();

//setup static and middleware
app.use(express.static('./public'))//해당 폴더 안에 파일들의 경로, MIME 등을 알아서 변경해 줌 

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// adding to static assets
// SSR
// })

app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})

app.listen(8000, () => {
    console.log('server is listening on port 8000');
})