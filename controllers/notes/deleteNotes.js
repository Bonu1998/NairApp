// Load Models
const User = require('../../models/User');
const Notes = require('../../models/Notes');

module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			Notes.deleteOne({user: req.user.id, id: req.params.fid})
				.then(notes => {
					res.status(200).json({success:true, message:"Notes deleted successfully"});
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to delete your Flashcards'}));
		})
		.catch(err => res.status(400).json({success: false, message:'User Invalid'}))
}