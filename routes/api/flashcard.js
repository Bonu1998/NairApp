const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../../middlewares/auth');

// Controllers
const getAllFlashcards = require('../../controllers/flashcard/getAllFlashcards');
const getFlashcardById = require('../../controllers/flashcard/getFlashcardById');
const createFlashcard = require('../../controllers/flashcard/createFlashcard');
const updateFlashcardById = require('../../controllers/flashcard/updateFlashcardById');
const deleteFlashcardById = require('../../controllers/flashcard/deleteFlashcardById');

// @desc    View all Flash cards
// @route   GET /flashcard/
router.get('/', ensureAuth, getAllFlashcards);

// @desc    View a single Flash card by flashcard id
// @route   GET /flashcard/
router.get('/:fid', ensureAuth, getFlashcardById);

// @desc    create Flash card
// @route   POST /flashcard/
router.post('/', ensureAuth, createFlashcard);

// @desc    update Flash card by flashcard id
// @route   POST /flashcard/
router.post('/:fid', ensureAuth, updateFlashcardById);

// @desc    delete a Flash card by flashcard id
// @route   DELETE /flashcard/:fid
router.delete('/:fid', ensureAuth, deleteFlashcardById);

module.exports = router;
