// Load Models
const User = require('../../models/User');
const FlashCard = require('../../models/FlashCard');

// validation
const isEmpty = require('../../validation/is-empty');

module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			FlashCard.findById(req.params.fid)
				.then(flashcard => {
					if(isEmpty(flashcard)){
						res.status(200).json({success: false, message: 'You have no Flashcards yet'});
					}else{
						res.status(200).json({success: true, message: 'here is flashcards', flashcard});
					}
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to fetch your Flashcard', err}));
		})
		.catch(err => res.status(400).json({success: false, message: 'User invalid'}))
}