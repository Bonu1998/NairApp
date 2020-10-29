// Load Models
const User = require('../../models/User');
const Post = require('../../models/Post');

// validation
const isEmpty = require('../../validation/is-empty');



module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			Post.findById(req.user.id)
				.then(posts => {
					if(isEmpty(posts)){
						res.status(200).json({success: false, message: 'You have no Posts yet'});
					}else{
						res.status(200).json({success: true, message: 'here is your Posts', posts});
					}
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to fetch your Posts'}));
		})
		.catch(err => res.status(400).json({success: false, message: 'User invalid'}))
}