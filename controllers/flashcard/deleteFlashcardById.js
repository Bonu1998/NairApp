// Load Models
const User = require('../../models/User');
const FlashCard = require('../../models/FlashCard');


module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			FlashCard.deleteOne({user: req.user.id, id: req.params.fid})
				.then(flashcards => {
					res.status(200).json({success:true, message:"FlashCard deleted successfully"});
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to delete your Flashcards', err}));
		})
		.catch(err => res.status(400).json({success: false, message:'User Invalid'}))
}
