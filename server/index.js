// dependencies
const express = require("express")
const app = express()
const path = require("path")

// variables
const PORT = process.env.PORT || 3000

const testData = {
    title:"one",
    females: 2
}

// can set basic data here -- eventually connect to a database
app.route('/api/test')
    .get((req, res) => {
        res.json(testData)
    })

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
