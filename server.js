const express = require("express")
const PORT = process.env.PORT || 3009
const app = express()
const data = require("./cleanData")
const { getRandomInt } = require("./helperFunctions")

const getOneReview = (_, res) => {
    let ind = getRandomInt(0, data.length - 1)
    res.json([data[ind]])
}

const getAllReviews = (_, res) => {
    res.json(data)
}

app.get('/all', getAllReviews)

app.get(['/one', '/*'], getOneReview)

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)
})
