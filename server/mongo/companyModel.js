// run 'node server/mongo/companyModel.js'
const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
	companyName: String,
	hashedPassword: String,

	companyProfile: {
		bio: String,
		email: String,
		address: {
			propertyName: String,
			streetName: String,
			city: String,
			country: String,
			postcode: String
		},
		profileImage: String,
		phoneNumber: Number,
		openTime: Date,
		closeTime: Date,
		maxCapacity: Number
	},
	countData: [
		{
			gender: String,
			ageRange: String,
			time: Date,
			date: Date,
		}
	],
	events: [
		{
			eventName: String,
			date: { startDate: Date, endDate: Date },
			time: { openTime: Date, closeTime: Date },
			eventDescription: String,
			images: []
		}
	]
})

const companyModel = mongoose.model('company', companySchema, 'companies')

module.exports = companyModel

// export default companyModel

// EXAMPLE
// creates a new mongoDB document

// let newCompany = new companyModel({
// 	companyName: 'Revolution',
// 	hashedPassword: 'xxxx',
//     companyProfile: {
// 		bio: 'Test',
// 		email: 'Example@example.com',
// 		address: {
// 			propertyName: 'Example Company',
// 			streetName: 'Example streetname',
// 			city: 'Example city',
// 			country: 'Example country',
// 			postcode: 'Example postcode'
// 		}
// 	}
// })

// create a connection

// mongoose
// 	.connect('mongodb://localhost:27017/liveVibeDB', { useNewUrlParser: true })
// 	.then(
// 		() => {
// 			// save to database
// 			newCompany.save(function(err) {
// 				if (err) return handleError(err)
// 				console.log('saved')
// 			})
// 		},
// 		err => console.log(err.message)
// 	)
