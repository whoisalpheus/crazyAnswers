const indexController = (req, res) => {
    res.json({ message: 'Crazy Answers' }) // Use res.json instead of res.render bc implementing React instead of ejs
}

module.exports = indexController