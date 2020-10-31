// Load Models
const User = require('../../models/User');
const Books = require('../../models/Books');

// validation
const isEmpty = require('../../validation/is-empty');

module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			Books.find()
				.sort({date: -1})
				.then(books => {
					if(isEmpty(books)){
						res.status(200).json({success: false, message: 'No Books available'});
					}else{
						res.status(200).json({success: true, message: 'Here are all our books', books});
					}
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to fetch Books'}));
		})
		.catch(err => res.status(400).json({success: false, message: 'User invalid'}))
}
