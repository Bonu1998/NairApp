const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../../middlewares/auth');

// Load Models
const User = require('../../models/User');
const Post = require('../../models/Post');

// validation
const validatePostInput = require('../../validation/posts');

// controllers
const getAllPosts = require('../../controllers/posts/getAllPosts');
const getAllPostsOfCurrentUser = require('../../controllers/posts/getAllPostsOfCurrentUser');
const createPost = require('../../controllers/posts/createPost');
const deletePostById = require('../../controllers/posts/deletePostById');
const likes = require('../../controllers/posts/likes');
const unlike = require('../../controllers/posts/unlike');
const addComments = require('../../controllers/posts/addComments');
const deleteComment = require('../../controllers/posts/deleteComments');

// @desc    View all post cards
// @route   GET /post/
router.get('/', ensureAuth, getAllPosts);

// @desc    View current user's all posts
// @route   GET /post/user
router.get('/user', ensureAuth, getAllPostsOfCurrentUser);

// @desc    create a Post card
// @route   POST /post/
router.post('/', ensureAuth, createPost);

// @desc    delete a Post by post id
// @route   DELETE /post/:pid
router.delete('/:pid', ensureAuth, deletePostById);

// @desc    add like to a Post by post id
// @route   POST /post/like/:pid
router.post('/like/:pid', ensureAuth, likes);

// @desc    Unlike post by id
// @route   POST /posts/unlike/:pid
router.post('/unlike/:pid', ensureAuth, unlike);

// @desc    Add comment to post
// @route   POST /posts/comment/:pid
router.post('/comment/:pid', ensureAuth, addComments);

// @desc    Remove comment from post
// @route   DELETE /posts/comment/:pid/:comment_id
router.delete('/comment/:pid/:comment_id', ensureAuth, deleteComment);

module.exports = router;
