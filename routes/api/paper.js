const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../../middlewares/auth');

// controllers
const getAllPapers = require('../../controllers/papers/getAllPapers');
const getPaperByCourse = require('../../controllers/papers/getPaperByCourse');
const getPaperById = require('../../controllers/papers/getPaperById');
const getPaperByPaperYear = require('../../controllers/papers/getPaperByPaperYear');
const getPaperBySubject = require('../../controllers/papers/getPaperBySubject');
const getPaperByUniversity = require('../../controllers/papers/getPaperByUniversity');
const getPaperByYear = require('../../controllers/papers/getPapersByYear');

// @desc    View all papers
// @route   GET /papers/
router.get('/', ensureAuth, getAllPapers);

// @desc    View all papers by Course
// @route   GET /papers/course/:pcourse
router.get('/course/:pcourse', ensureAuth, getPaperByCourse);

// @desc    View all papers by id
// @route   GET /papers/id/:pid
router.get('/id/:pid', ensureAuth, getPaperById);

// @desc    View all papers by Paper Year
// @route   GET /papers/ppy/:ppy
router.get('/ppy/:ppy', ensureAuth, getPaperByPaperYear);

// @desc    View all papers by Subject
// @route   GET /papers/subject/:psubject
router.get('/subject/:psubject', ensureAuth, getPaperBySubject);

// @desc    View all papers by University
// @route   GET /papers/university/:puniversity
router.get('/university/:puniversity', ensureAuth, getPaperByUniversity);

// @desc    View all papers by University
// @route   GET /papers/year/:pyear
router.get('/year/:pyear', ensureAuth, getPaperByYear);


// const Paper = require('../../models/Paper'); 
// // test
// router.post('/', (req, res) =>{
//     const newPaper = new Paper({
//         course: req.body.course,
//         subject: req.body.subject,
//         university: req.body.university,
//         year: req.body.year,
//         paperYear: req.body.paperYear,
//         link: req.body.link
//     });
//     newPaper.save().then(() => res.json({success: true}))
//     .catch(err => res.json({success:false, err}))
// });



module.exports = router;
