const express = require("express")
const PORT = process.env.PORT || 3009
const app = express()

const data = require("./cleanData")

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

app.get('/one', (req, res) => {
    // return random review
    let ind = getRandomInt(0, data.length - 1)
    res.json([data[ind]])
})

app.get('/all', (req, res) => {
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})
