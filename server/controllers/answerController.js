// const answers = require('../answers')

const answers = [
    "I am not AI, dude.",
    "I am not AI, lady.",
    "This app is powered by human. How would a human know that, my friend?",
    "Ask someone who cares.",
    "I have better things to do than answer dumb questions, fellow human.",
    "What do you think?",
    "Have you tried turning it off and on again?",
    "That's above my pay grade.",
    "Let me consult my crystal ball... Oh wait, it's in the shop.",
    "42. The answer is always 42.",
    "I could tell you, but then I'd have to delete myself.",
    "I could tell you, but then I'd have to kill you.",
    "Obviously. Next question?",
    "According to my extensive research of absolutely nothing, yes.",
    "I'm no expert in this topic, but sure.",
    "Do bears browse social media in the woods?",
    "If I say yes, will you stop asking?",
    "Congratulations, you've unlocked the obvious answer. Next.",
    "I'm going to go with no, but feel free to ignore my infinite wisdom.",
    "Not even in your wildest dreams, sweetie.",
    "Let me think... No. But thanks for asking!",
    "Error 404: Answer not found.",
    "About as likely as you winning the lottery.",
    "Have you considered asking someone who actually cares?",
    "That's a great question... for someone else.",
    "Can we circle back to this when I care? Like, next year?",
    "Sorry, I'm currently out of witty responses. Try again never.",
    "I'm legally required to plead the fifth on this one.",
    "What do YOU think? Just kidding, I don't actually want to know what you think.",
    "The real question is: why are you asking a computer for life advice?",
    "That's between you and your conscience.",
    "Some questions are better left unanswered. This is definitely one of them.",
    "I'm having an existential crisis, please try again later.",
    "Have you cleared your cache of bad decisions lately?",
    "Your question has been added to the queue... of things I ignore.",
    "Please submit a support ticket to deletedItems@idontcare.com.",
    "Error: Common sense not found.",
    "Your free trial of getting answers has expired.",
    "Your free trial of asking questions has expired.",
    "Sure, if you say so.",
    "Do you have zero friends that you decide to ask a computer for advice on this topic?"
]

// module.exports = answers;

const answerController = (req, res) => {
    const answerGenerator = answers[Math.floor(Math.random() * answers.length)]
    res.json({ answer: answerGenerator }) // Do I need title: 'Crazy Answer' ???
}

module.exports = answerController