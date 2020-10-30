// Load Models
const Profile = require('../../models/Profile');
const Post = require('../../models/Post');

module.exports = (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
        Post.findById(req.params.id)
          .then(post => {
            if (
              post.likes.filter(like => like.user.toString() === req.user.id).length === 0
            ) {
              return res.status(200).json({ success: false, message: 'You have not yet liked this post' });
            }
  
            // Get remove index
            const removeIndex = post.likes
              .map(item => item.user.toString())
              .indexOf(req.user.id);
  
            // Splice out of array
            post.likes.splice(removeIndex, 1);
  
            // Save
            post.save().then(post => res.status(200).json({success:true, message:'Unliked Post'}))
                .catch(err => res.status(500).json({ success: false, message: 'Unable to unlike post' }));
          })
          .catch(err => res.status(500).json({ success: false, message: 'No post found' }));
      }).catch(err => res.status(500).json({ success: false, message: 'Something went wrong' }));
}