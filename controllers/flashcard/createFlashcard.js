// Load Models
const User = require('../../models/User');
const FlashCard = require('../../models/FlashCard');

// validation
const validateFlashcardInput = require('../../validation/flashcard');

module.exports = (req, res) =>{
	const {errors, isValid} = validateFlashcardInput(req.body);

	if(!isValid){
		res.status(200).json({success: true, message:'Enter Proper Details'});
	}else {
		User.findById(req.user.id)
			.then(user => {
				const newFlashcard = new FlashCard({
					user: req.user.id,
					subject: req.body.subject,
					topic: req.body.topic,
					heading: req.body.heading,
					question: req.body.question,
					answer: req.body.answer
				});

				newFlashcard.save()
					.then(() => res.status(200).json({success: true, message: 'Flashcard Added'}))
					.catch(err => res.status(500).json({success: false, message: 'Flashcard was not Added'}))
			})
			.catch(err => res.status(400).json({success: false, message:'User Invalid'}))
	};
}
