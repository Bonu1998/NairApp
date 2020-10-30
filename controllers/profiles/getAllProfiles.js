// Load models
const Profile = require('../../models/Profile');

// validation
const isEmpty = require('../../validation/is-empty');

// @route   POST /profile
// @desc    Create or edit user profile
// @access  Private

module.exports = (req, res) => {
	Profile.find()
		.populate('User', ['displayName', 'image'])
		.then(profiles => {
			if (isEmpty(profiles) || (Array.isArray(profiles) && !profiles.length)) {
				res.status(200).json({success: false, message:'No profiles yet'});
			}else{
                res.status(200).json({success: true, message:'Profiles', data: profiles});
            }
		}).catch(err => res.status(500).json({success: false, message:'Something went wrong'}));
};


