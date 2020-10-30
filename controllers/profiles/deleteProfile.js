// Load models
const Profile = require('../../models/Profile');

// @route   DELETE /profile
// @desc    Delete user and profile
// @access  Private
module.exports = (req, res) => {
    Profile.findOneAndRemove({ user: req.user.id })
        .then(() => {
            User.findOneAndRemove({ _id: req.user.id })
                .then(() =>{
                    res.json({ success: true , message:'User deleted Successfully'});
                })
                .catch(err => res.status(500).json({success: false, message:'Something went wrong'}));
        })
        .catch(err => res.status(500).json({success: false, message:'Something went wrong'}));
}
