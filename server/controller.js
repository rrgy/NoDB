const axios = require('axios')

const randAnswers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes - Definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Response hazy, try again', 'Ask again later', 'Better not tell you', 'Can not predict now', 'Concentrate and ask again', `Don't count on it`, 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']
const oldAnswers = []
const specAnswers = []
module.exports = {
    getRandAnswer: (req, res) => {
        const answer = randAnswers[Math.floor(Math.random() * randAnswers.length)]
        oldAnswers.unshift(answer)
        res.status(200).send(answer)
    },
    getOldAnswers: (req, res) => {
        res.status(200).send(oldAnswers)
    },
    newAnswer: (req, res) => {
        const { index, newAnswer } = req.body
        oldAnswers[index] = newAnswer
        res.status(200).send(oldAnswers)
    },
    delete: (req, res) => {
        const { index } = req.params
        oldAnswers.splice(index, 1)
        res.status(200).send(oldAnswers)
    },
    spec: (req, res) => {
        const { item } = req.body
        specAnswers.unshift(item)
        res.status(200).send(specAnswers)
    },
    getSpecAnswer: (req, res) => {
        const answer = specAnswers[Math.floor(Math.random() * specAnswers.length)]
        res.status(200).send(answer)
    },

}
