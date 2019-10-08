// dependencies
const express = require('express')
const app = express()
const path = require('path')

const mongoose = require('mongoose')
const companyModel = require('./mongo/companyModel')

// variables
const PORT = process.env.PORT || 3000

// need to authenticate user before returning data
// TODO: move to api routes file
app.route('/api/companyProfile').get((req, res) => {
	mongoose
		.connect('mongodb://localhost:27017/liveVibeDB', {
			useNewUrlParser: true
		})
		.then(async () => {
			const docs = await companyModel.findOne({companyName: "Revolution"})
			res.json(docs)
		})
})

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
