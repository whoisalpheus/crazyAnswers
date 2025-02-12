import { useState } from 'react'
import './App.css'
// import Button from './Button'
import answers from './answers.js'

function Display() {
    const [showAnswer, setShowAnswer] = useState(false)
    const [currentAnswer, setCurrentAnswer] = useState('')
    const [question, setQuestion] = useState('')
    const [error, setError] = useState('')
    const [lastQuestion, setLastQuestion] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        // Check for empty question field
        if (!question.trim()) {
            setError('Please enter a question!')
            setShowAnswer(false)
            return
        }

        // Check for repeated question
        if (question === lastQuestion) {
            setError('Please ask a different question!')
            setShowAnswer(false)
            return
        }

        const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
        setCurrentAnswer(randomAnswer)
        setShowAnswer(true)
        setLastQuestion(question)
        setError('')
    }

    return (
        <>
            <form onSubmit={ handleSubmit } action="" method="get" autoComplete='off'>
                <input 
                    type="text" 
                    name="question" 
                    id="question"
                    value={ question }
                    onChange={ (e) => setQuestion(e.target.value) } 
                    placeholder="Ask your question..." />
                <button type="submit">Ask!</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {showAnswer && !error && <p>{currentAnswer}</p>}
        </>
    )
}

export default Display