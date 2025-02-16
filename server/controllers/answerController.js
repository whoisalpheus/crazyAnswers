const answers = require('../answers')

const answerController = (req, res) => {
    const answerGenerator = answers[Math.floor(Math.random() * answers.length)]
    res.json({ answer: answerGenerator }) // Do I need title: 'Crazy Answer' ???
}

module.exports = answerController