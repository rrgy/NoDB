require('dotenv').config()
const express = require('express')
const answers = require('./controller')
const { SERVER_PORT } = process.env
const app = express()

app.use(express.json())

app.get('/api/answers/getRandAnswer', answers.getRandAnswer)
app.get('/api/answers/getOldAnswers', answers.getOldAnswers)
app.get('/api/answers/getSpecAnswer', answers.getSpecAnswer)

app.put('/api/answers/', answers.newAnswer)
app.delete('/api/answers/:index', answers.delete)
app.post('/api/answers', answers.spec)


app.listen(SERVER_PORT, () => console.log('beep boop'))