// Load models
const Profile = require('../../models/Profile');

// validation
const isEmpty = require('../../validation/is-empty');
const validateExperienceInput = require('../../validation/experience');

// @route   POST /profile/experience
// @desc    Add experience to profile
// @access  Private
module.exports = (req, res) => {
    const { errors, isValid } = validateExperienceInput(req.body);

    // Check Validation
    if (!isValid) {
        return res.status(200).json({success: false, message: 'Fill in details properly',errors});
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newExp = {
        whereAt: req.body.whereAt,
        duration: req.body.duration,
        designation: req.body.designation,
        description: req.body.description
      };

      // Add to exp array
      profile.experience.unshift(newExp);

      profile.save()
      .then(profile => res.status(200).json({success: true, message: 'Experience added successfully'}))
      .catch(err => res.status(500).json({success: false, message:'Unable to add experience'}));;
    })
    .catch(err => res.status(500).json({success: false, message:'Invalid User'}));

}
