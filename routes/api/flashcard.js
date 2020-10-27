const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../../middlewares/auth');

// Load Models
const User = require('../../models/User');
const FlashCard = require('../../models/FlashCard');

// validation
const validateFlashcardInput = require('../../validation/flashcard');

// @desc    View all Flash cards
// @route   GET /flashcard/
router.get('/', /*ensureAuth,*/ (req, res)=>{
	// User.findById(req.user.id)
	// 	.then(user => {
			FlashCard.find(/*{user: req.user.id}*/)
				.sort({date: -1})
				.then(flashcards => {
					if(!flashcards)
						res.status(200).json({success: false, message: 'You have no Flashcards yet'})
					res.status(200).json({success: true, message: 'here are all your flashcards', flashcards});
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to fetch your Flashcards', err}));
		// })
		// .catch(err => res.status(400).json({success: false, message: 'User invalid'}))
});

// @desc    create Flash card
// @route   POST /flashcard/
router.post('/', /*ensureAuth,*/ (req, res) =>{
	const {errors, isValid} = validateFlashcardInput(req.body);

	if(!isValid){
		res.status(400).json(errors);
	}else {
		// User.findById(req.user.id)
		// 	.then(user => {
				const newFlashcard = new FlashCard({
					//user: req.user.id,
					subject: req.body.subject,
					topic: req.body.topic,
					heading: req.body.heading,
					question: req.body.question,
					answer: req.body.answer
				});

				newFlashcard.save()
					.then(() => res.status(200).json({success: true, message: 'Flashcard Added'}))
					.catch(err => res.status(500).json({success: false, message: 'Flashcard was not Added', err}))
			// })
			// .catch(err => res.status(400).json({success: false, message:'User Invalid'}))
	};
});

// @desc    update Flash card
// @route   POST /flashcard/
router.post('/:fid', /*ensureAuth,*/ (req, res) =>{
	const {errors, isValid} = validateFlashcardInput(req.body);

	if(!isValid){
		res.status(400).json(errors);
	}else {
		// User.findById(req.user.id)
		// 	.then(user => {
				const updatedFlashcard = new FlashCard({
					//user: req.user.id,
					subject: req.body.subject,
					topic: req.body.topic,
					heading: req.body.heading,
					question: req.body.question,
					answer: req.body.answer
				});

				Flashcard.findOneAndUpdate({user: req.params.fid}, updatedFlashcard, {new: true}).
					.then((doc) => res.status(200).json({success: true, message: 'Flashcard updated'}))
					.catch(err => res.status(500).json({success: true, message: 'Unable to update Flashcard'}))
			// })
			// .catch(err => res.status(400).json({success: false, message:'User Invalid'}))
	};
});

// @desc    delete a Flash card by id
// @route   DELETE /flashcard/:fid
router.delete('/:fid', /*ensureAuth,*/ (req, res)=>{
	// User.findById(req.user.id)
	// 	.then(user => {
			FlashCard.deleteOne({id: req.params.fid})/*{user: req.user.id, id: req.params.fid}*/
				.then(flashcards => {
					res.status(200).json({success:true, message:"FlashCard deleted successfully"});
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to delete your Flashcards', err}));
		// })
		// .catch(err => res.status(400).json({success: false, message:'User Invalid'}))
});




module.exports = router;