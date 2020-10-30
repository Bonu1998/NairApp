// Load Models
const User = require('../../models/User');
const Post = require('../../models/Post');

module.exports = (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
        Post.findById(req.params.id)
          .then(post => {
            if (
              post.likes.filter(like => like.user.toString() === req.user.id).length > 0
            ) {
              return res.status(200).json({ success: false, message: 'User already liked this post' });
            }
            // Add user id to likes array
            post.likes.unshift({ user: req.user.id });
  
            post.save()
                .then(post => res.json({ success: true, message: 'User liked this post' }))
                .catch(err => res.status(500).json({ success: false, message: 'Unable to like post' }));
          })
          .catch(err => res.status(500).json({ success: false, message: 'No post found' }));
      }).catch(err => res.status(500).json({ success: false, message: 'Something went wrong' }));
}