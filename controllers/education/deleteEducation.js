// Load models
const Profile = require('../../models/Profile');

module.exports = (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.education
          .map(item => item.id)
          .indexOf(req.params.edu_id);

        // Splice out of array
        profile.education.splice(removeIndex, 1);

        // Save
        profile.save()
            .then(profile => res.status(200).json({success: true, message: 'Education deleted successfully'}))
            .catch(err => res.status(500).json({success: false, message:'Unable to delete education'}));
      })
      .catch(err => res.status(500).json({success: false, message:'Invalid User'}));
}