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

module.exports = router;