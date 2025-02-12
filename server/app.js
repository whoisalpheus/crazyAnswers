const express = require('express')
require('dotenv').config()
const indexRouter = require('./routes/indexRouter')
const answerRouter = require('./routes/answerRouter')

const app = express()

// No view engine...using React...

app.use(cors())
app.use(express.urlencoded({ extended: true })) // Needed without view engine??? Comment out???
app.use(express.json()) // req.body???

// Routes
app.get('/', indexRouter)
app.get('/answer', answerRouter)

// Listen...
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`crazyAnswers2 app is listening on port ${PORT}`)
})