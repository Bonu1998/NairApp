// Load Models
const User = require('../../models/User');
const Post = require('../../models/Post');

module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			Post.deleteOne({user: req.user.id, id: req.params.pid})
				.then(post => {
					res.status(200).json({success:true, message:"Post deleted successfully"});
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to delete your Post'}));
		})
		.catch(err => res.status(400).json({success: false, message:'User Invalid'}))
}