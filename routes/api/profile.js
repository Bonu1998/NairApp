const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../../middlewares/auth');

// Profile controllers
const getCurrentUserProfile = require('../../controllers/profiles/getCurrentUserProfile');
const getUserProfileById = require('../../controllers/profiles/getUserProfileById');
const getAllProfiles = require('../../controllers/profiles/getAllProfiles');
const createOrEditProfile = require('../../controllers/profiles/createOrEditProfile');
const deleteProfile = require('../../controllers/profiles/deleteProfile');

// Education controllers
const addEducation = require('../../controllers/education/addEducation');
const deleteEducation = require('../../controllers/education/deleteEducation');

// Experience controllers
const addExperience = require('../../controllers/experience/addExperience');
const deleteExperience = require('../../controllers/experience/deleteExperience');

// @route   GET /profile
// @desc    get current users profile
// @access  Private
router.get('/', ensureAuth, getCurrentUserProfile);

// @route   GET /profile/user/:user_id
// @desc    get profile by user_id
// @access  Public
router.get('/user/:user_id', getUserProfileById);

// @route   GET /profile/all
// @desc    get all profiles
// @access  Public
router.get('/all', getAllProfiles);

// @route   POST /profile
// @desc    Create or edit user profile
// @access  Private
router.post('/', ensureAuth, createOrEditProfile);

// @route   DELETE /profile
// @desc    Delete user and profile
// @access  Private
router.delete('/', ensureAuth, deleteProfile);

// @route   POST /profile/education
// @desc    Add education to profile
// @access  Private
router.post('/education', ensureAuth, addEducation);

// @route   DELETE profile/education/:edu_id
// @desc    Delete education from profile
// @access  Private
router.delete('/education/:edu_id', ensureAuth, deleteEducation);

// @route   POST profile/experience
// @desc    Add experience to profile
// @access  Private
router.post('/experience', ensureAuth, addExperience);

// @route   DELETE profile/experience/:exp_id
// @desc    Delete experience from profile
// @access  Private
router.delete('/experience/:exp_id', ensureAuth, deleteExperience);




module.exports = router;