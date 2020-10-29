// Load Models
const User = require('../../models/User');
const Post = require('../../models/Post');

// validation
const isEmpty = require('../../validation/is-empty');
const validatePostInput = require('../../validation/posts');

module.exports = (req, res) =>{
	const {errors, isValid} = validateFlashcardInput(req.body);

	if(!isValid){
		res.status(400).json(errors);
	}else {
		User.findById(req.user.id)
			.then(user => {
				const newPost = new Post({
					user: req.user.id,
                    text: req.body.text,
                    name: req.user.name,
                    image: req.user.image
				});

				newPost.save()
					.then(() => res.status(200).json({success: true, message: 'Post Added'}))
					.catch(err => res.status(500).json({success: false, message: 'Post was not Added'}))
			})
			.catch(err => res.status(400).json({success: false, message:'User Invalid'}))
	};
}
