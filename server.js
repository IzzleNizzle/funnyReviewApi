const express = require("express");
const PORT = process.env.PORT || 3009;
const app = express();

const data = require("./cleanData");


app.get('/one', (req, res) => {
    // return random review
    let ind = Math.round(Math.random() * (data.length - 0) + 0)
    res.json([data[ind]])
})

app.get('/all', (req, res) => {
    res.json(data)
})

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});