import { useState } from 'react'
import './App.css'

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

        setError('')
        setLastQuestion(question)

        // https://crazyanswers-backend.onrender.com
        // http://localhost:5000

        try {
            const response = await fetch('https://crazyanswers-backend.onrender.com/answer') // Use ENV_VAR for future...
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
            <form onSubmit={ handleSubmit } action="" method="get">
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
            {showAnswer && !error && <h2>{currentAnswer}</h2>}
        </>
    )
}

export default Display
