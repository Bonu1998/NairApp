// Load models
const Profile = require('../../models/Profile');

module.exports = (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        // Get remove index
        const removeIndex = profile.experience
          .map(item => item.id)
          .indexOf(req.params.exp_id);

        // Splice out of array
        profile.experience.splice(removeIndex, 1);

        // Save
        profile.save()
            .then(profile => res.json(profile))
            .catch(err => res.status(500).json({success: false, message:'Unable to delete experience'}));
      })
      .catch(err => res.status(500).json({success: false, message:'Invalid User'}));
}
