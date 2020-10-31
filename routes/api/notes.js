const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../../middlewares/auth');

// controllers
const getAllNotes = require('../../controllers/notes/getAllNotes');
const getAllNotesById = require('../../controllers/notes/getAllNotesById');
const addNotes = require('../../controllers/notes/addNotes');
const updateNotes = require('../../controllers/notes/updateNotes');
const deleteNotes = require('../../controllers/notes/deleteNotes');

// @desc    View all notes
// @route   GET /notes/
router.get('/', ensureAuth, getAllNotes);

// @desc    View particular notes by id
// @route   GET /notes/:nid
router.get('/:nid', ensureAuth, getAllNotesById);

// @desc    add notes
// @route   POST /notes/
router.post('/', ensureAuth, addNotes);

// @desc    update notes
// @route   POST /notes/:nid
router.post('/:nid', ensureAuth, updateNotes);

// @desc    delete notes
// @route   DELETE /notes/:nid
router.delete('/:nid', ensureAuth, deleteNotes);

module.exports = router;
