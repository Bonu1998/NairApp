// Load models
const Profile = require('../../models/Profile');

// validation
const isEmpty = require('../../validation/is-empty');
const validateProfileInput = require('../../validation/profile');

// @desc    get all profiles
// @access  private
// @route   GET /profile/all

module.exports = (req, res) => {
    const { errors, isValid } = validateProfileInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(200).json(errors);
    }

    // Get fields
    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.status) profileFields.status = req.body.status;
    // Skills - Spilt into array
    if (typeof req.body.skills !== 'undefined') {
      profileFields.skills = req.body.skills.split(',');
    }

    // Social
    profileFields.social = {};
    if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
    if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

    Profile.findOne({ user: req.user.id }).then(profile => {
      if (profile) {
        // Update
        Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        )
            .then(profile => res.status(200).json({success:true, message:'Profile Updated Successfully'}))
            .catch(err => res.status(500).json({success: false, message:"Unable to update your Profile"}));
      } else {
        // Create

        // Save Profile
        new Profile(profileFields).save()
            .then(profile => res.status(200).json({success: true, message:'Profile Created Successfully'}))
            .catch(err => res.status(500).json({success: false, message:"Unable to create your Profile"}));
        };
      });
};