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

app.post('/login', (req, res) => {
    const { name } = req.body
    if(name){
        return res.status(200).send(`welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if(!name){
       return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, person: name })
})

app.post('/api/people/postman', (req, res) => {
    const { name } = req.body
    if(!name){
       return res.status(400).json({ success: false, msg: 'please provide name value' })
    }
    res.status(201).json({ success: true, data: [...people, name]})
})

//body에 요청한 이름으로 해당 :id와 일치하는 이름 변경하기 
app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find(person => person.id === Number(id))
    if(!person){
        return res.status(404).json({ success: false, msg: `no person with id ${id}`})
    }

    const newPeople = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople })
})

//:id가 일치하는 요소 삭제하기 
app.delete('/api/people/:id', (req, res) => {
    const { id } = req.params
    const person = people.find(person => person.id === Number(id))
    if(!person){
        return res.status(404).json({ success: false, msg: `no person width id ${id}`})
    }
    const newPeople = people.filter(person => person.id !== Number(id))
    return res.status(200).json({ success: true, data: newPeople})    
})

app.listen(8000, () => {
    console.log('server is listening on port 8000');
})