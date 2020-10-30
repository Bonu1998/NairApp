// Load models
const Profile = require('../../models/Profile');

// validation
const isEmpty = require('../../validation/is-empty');

// @route   GET /profile
// @desc    get current users profile
// @access  Private
module.exports = (req, res) => {
	Profile.findOne({user: req.user.id})
		.populate('User', ['displayName', 'image'])
		.then(profile => {
			if(isEmpty(profile)){
				res.status(200).json({success: false, message:'There is no Profile for this user'});
			}else{
                res.json({success: true, message:'Here is your profile', data: profile});
            };
		})
		.catch(err => res.status(500).json({success: false, message:'Invalid User'}));
};