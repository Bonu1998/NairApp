// Load Models
const User = require('../../models/User');
const Post = require('../../models/Post');

// validation
const isEmpty = require('../../validation/is-empty');

module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			Post.find()
				.sort({date: -1})
				.then(posts => {
					if(isEmpty(posts)){
						res.status(200).json({success: false, message: 'no posts yet'});
					}else{
						res.status(200).json({success: true, message: 'here are all posts', posts});
					}
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to fetch your posts'}));
		})
		.catch(err => res.status(400).json({success: false, message: 'User invalid'}))
}