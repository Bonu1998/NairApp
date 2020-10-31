// Load Models
const User = require('../../models/User');
const Books = require('../../models/Books');

// validation
const isEmpty = require('../../validation/is-empty');

module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			Books.findById(req.params.bid)
				.then(book => {
					if(isEmpty(book)){
						res.status(200).json({success: false, message: 'No book found'});
					}else{
						res.status(200).json({success: true, message: 'here is your book', book});
					}
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to fetch Book'}));
		})
		.catch(err => res.status(400).json({success: false, message: 'User invalid'}))
}