const path = require('path')
const express = require('express')
require('dotenv').config()
const cors = require('cors')
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

// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'))
// }

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')))
}

app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))


// Listen...
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`crazyAnswers2 app is listening on port ${PORT}`)
})