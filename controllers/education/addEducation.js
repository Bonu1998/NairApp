// Load models
const Profile = require('../../models/Profile');

// validation
const isEmpty = require('../../validation/is-empty');
const validateEducationInput = require('../../validation/education');

// @route   POST /profile/education
// @desc    Add education to profile
// @access  Private

module.exports = (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(200).json({success: false, message: 'Fill in details properly',errors});
    }

    Profile.findOne({ user: req.user.id }).then(profile => {
      const newEdu = {
        degree: req.body.degree,
        university: req.body.university,
        college: req.body.college,
        completed: req.body.completed,
		marksType: req.body.marksType,
		marks: req.body.marks
      };

      // Add to exp array
      profile.education.unshift(newEdu);

      profile.save()
        .then(profile => res.status(200).json({success: true, message: 'Education added successfully'}))
        .catch(err => res.status(500).json({success: false, message:'Unable to add education'}));
    })
    .catch(err => res.status(500).json({success: false, message:'Invalid User'}));
}
