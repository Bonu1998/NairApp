// Load models
const Profile = require('../../models/Profile');

// validation
const isEmpty = require('../../validation/is-empty');

// @route   GET /profile/user/:user_id
// @desc    get profile by user_id
// @access  Public
module.exports = (req, res) => {
	Profile.findOne({user: req.params.user_id})
		.populate('User', ['displayName', 'image'])
		.then(profile => {
			if(isEmpty(profile)){
				res.status(404).json({sucess: false, message:'User does not have a profile'});
			}
			res.status(200).json({sucess: true, message:'User Profile', data: profile});
		}).catch(err => res.status(500).json({success: false, message:"Something went wrong"}));
};