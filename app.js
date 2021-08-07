const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');

const app = express();

// req => middleware => req

// middleware task
// 모든 코드를 실행.
// 요청 및 응답 오브젝트에 대한 변경을 실행.
// 요청-응답 주기를 종료.
// 스택 내의 그 다음 미들웨어를 호출.
// 미들웨어는 로드 순서 중요, 모두 적용시키려면 상단에 위치

app.use([logger, authorize]) 

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.listen(8000, () => {
    console.log('server is listening on port 8000');
})