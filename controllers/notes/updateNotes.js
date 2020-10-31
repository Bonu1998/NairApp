// Load Models
const User = require('../../models/User');
const Notes = require('../../models/Notes');

// validation
const validateNotesInput = require('../../validation/notes');


module.exports = (req, res) =>{
	const {errors, isValid} = validateNotesInput(req.body);

	if(!isValid){
		res.status(200).json({success: true, message:'Enter Proper Details'});
	}else {
		User.findById(req.user.id)
			.then(user => {
				const updatedNotes = new Notes({
					user: req.user.id,
					subject: req.body.subject,
					topic: req.body.topic,
					heading: req.body.heading,
					link: req.body.answer
				});

				Notes.findOneAndUpdate({user: req.params.nid}, updatedNotes, {new: true})
					.then((doc) => res.status(200).json({success: true, message: 'Notes updated'}))
					.catch(err => res.status(500).json({success: true, message: 'Unable to update Notes'}))
			})
			.catch(err => res.status(400).json({success: false, message:'User Invalid'}))
	};
}