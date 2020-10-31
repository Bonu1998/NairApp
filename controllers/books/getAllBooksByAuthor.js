// Load Models
const User = require('../../models/User');
const Books = require('../../models/Books');

// validation
const isEmpty = require('../../validation/is-empty');

module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			Books.find({ author: req.params.bauthor})
				.then(books => {
					if(isEmpty(books)){
						res.status(200).json({success: false, message: 'No books found'});
					}else{
						res.status(200).json({success: true, message: 'here is your books', books});
					}
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to fetch Book'}));
		})
		.catch(err => res.status(400).json({success: false, message: 'User invalid'}))
}