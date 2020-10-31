const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../../middlewares/auth');

// controllers
const getAllBooks = require('../../controllers/books/getAllBooks');
const getAllBooksById = require('../../controllers/books/getAllBooksById');
const getAllBooksByName = require('../../controllers/books/getAllBooksByName');
const getAllBooksBySubject = require('../../controllers/books/getAllBooksBySubject');
const getAllBooksByTopic = require('../../controllers/books/getAllBooksByTopic');
const getAllBooksByAuthor = require('../../controllers/books/getAllBooksByAuthor');

// @desc    View all notes
// @route   GET /books/
router.get('/', ensureAuth, getAllBooks);

// @desc    View particular notes by id
// @route   GET /books/id/:bid
router.get('/id/:bid', ensureAuth, getAllBooksById);

// @desc    View particular notes by name
// @route   GET /books/name/:bname
router.get('/name/:bname', ensureAuth, getAllBooksByName);

// @desc    View particular notes by subject
// @route   GET /books/subject/:bsubject
router.get('/subject/:bsubject', ensureAuth, getAllBooksBySubject);

// @desc    View particular notes by topic
// @route   GET /books/topic/:btopic
router.get('/topic/:btopic', ensureAuth, getAllBooksByTopic);

// @desc    View particular notes by Author
// @route   GET /books/author/:bauthor
router.get('/author/:bauthor', ensureAuth, getAllBooksByAuthor);


// const Books = require('../../models/Books'); 
// // test
// router.post('/', (req, res) =>{
//     const newBook = new Books({
//         name: req.body.name,
//         subject: req.body.subject,
//         topic: req.body.topic,
//         description: req.body.description,
//         author: req.body.author,
//         link: req.body.link
//     });
//     newBook.save().then(() => res.json({success: true}))
//     .catch(err => res.json({success:false, err}))
// });

module.exports = router;