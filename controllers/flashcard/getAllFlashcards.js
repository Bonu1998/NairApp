// Load Models
const User = require('../../models/User');
const FlashCard = require('../../models/FlashCard');

// validation
const isEmpty = require('../../validation/is-empty');

module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			FlashCard.find({user: req.user.id})
				.sort({date: -1})
				.then(flashcards => {
					if(isEmpty(flashcards)){
						res.status(200).json({success: false, message: 'You have no Flashcards yet'});
					}else{
						res.status(200).json({success: true, message: 'here are all your flashcards', flashcards});
					}
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to fetch your Flashcards', err}));
		})
		.catch(err => res.status(400).json({success: false, message: 'User invalid'}))
}