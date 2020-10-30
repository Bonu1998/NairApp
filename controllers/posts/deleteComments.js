// Load Models
const Post = require('../../models/Post');

module.exports = (req, res) => {
    Post.findById(req.params.pid)
      .then(post => {
        // Check to see if comment exists
        if (
          post.comments.filter(
            comment => comment._id.toString() === req.params.comment_id
          ).length === 0
        ) {
          return res
            .status(200)
            .json({ success: false, message: 'Comment does not exist' });
        }

        // Get remove index
        const removeIndex = post.comments
          .map(item => item._id.toString())
          .indexOf(req.params.comment_id);

        // Splice comment out of array
        post.comments.splice(removeIndex, 1);

        post.save()
            .then(post => res.status(200).json({success: true, message:'Comment deleted'}))
            .catch(err => res.status(404).json({ success: true, message: 'No post found' }));
      })
      .catch(err => res.status(404).json({ success: true, message: 'Something Went wrong' }));
}