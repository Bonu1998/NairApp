// Load Models
const Post = require('../../models/Post');

// validation
const validatePostInput = require('../../validation/posts');

module.exports = (req, res)=> {
    const { errors, isValid } = validatePostInput(req.body);

    // Check Validation
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }

    Post.findById(req.params.pid)
      .then(post => {
        const newComment = {
          text: req.body.text,
          name: req.user.displayName,
          image: req.user.image,
          user: req.user.id
        };

        // Add to comments array
        post.comments.unshift(newComment);

        // Save
        post.save()
            .then(post => res.status(200).json({success: true, message: 'Comment successful'}))
            .catch(err => res.status(500).json({success: false, message:'Unable to comment'}));
      })
      .catch(err => res.status(404).json({ success: false, message: 'No post found' }));
}