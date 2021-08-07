const express = require('express');
const app = express();

// req => middleware => req

// middleware task
// 모든 코드를 실행.
// 요청 및 응답 오브젝트에 대한 변경을 실행.
// 요청-응답 주기를 종료.
// 스택 내의 그 다음 미들웨어를 호출.

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next()
}


app.get('/', logger, (req, res) => {
    res.send('Home')
})

app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(8000, () => {
    console.log('server is listening on port 8000');
})