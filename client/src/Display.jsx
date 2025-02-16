import { useState } from 'react'
import './App.css'
// import Button from './Button'

function Display() {
    const [showAnswer, setShowAnswer] = useState(false)
    const [currentAnswer, setCurrentAnswer] = useState('')
    const [question, setQuestion] = useState('')
    const [error, setError] = useState('')
    const [lastQuestion, setLastQuestion] = useState('')

    const handleSubmit = async (e) => {
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

        // Do I need this...bc the logic is in the controller/server...???
        // const randomAnswer = answers[Math.floor(Math.random() * answers.length)]
        // setCurrentAnswer(randomAnswer)
        // setShowAnswer(true)
        setError('')
        setLastQuestion(question)

        // Try/Catch...do i need a try/catch???
        try {
            const response = await fetch('http://localhost:3000/answer') // 3000 or 5000 ???
            if (!response.ok) {
                throw new Error('Failed to fetch answer')
            }
            const data = await response.json()
            setCurrentAnswer(data.answer)
            setShowAnswer(true)
        } catch (err) {
            setError('Error fetching answer. Try again later.')
            setShowAnswer(false)
        }
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
                    placeholder="Ask your question..." 
                />
                <button type="submit">Ask!</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
            {showAnswer && !error && <p>{currentAnswer}</p>}
        </>
    )
}

export default Display