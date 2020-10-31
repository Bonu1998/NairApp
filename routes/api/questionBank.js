const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../../middlewares/auth');

// Controllers
const getAllQuestionBanks = require('../../controllers/questionBank/getAllQuestionBanks');
const getAllQuestionBanksByCollege = require('../../controllers/questionBank/getAllQuestionBanksByCollege');
const getAllQuestionBanksBySubject = require('../../controllers/questionBank/getAllQuestionBankById');
const getAllQuestionBankById = require('../../controllers/questionBank/getAllQuestionBankById');
const getAllQuestionBanksByTopic = require('../../controllers/questionBank/getAllQuestionBanksByTopic');

// @desc    View all Questionbanks
// @route   GET /qb/
router.get('/', ensureAuth, getAllQuestionBanks);

// @desc    View all Questionbanks by College
// @route   GET /qb/college/:qcollege
router.get('/college/:qcollege', ensureAuth, getAllQuestionBanksByCollege);

// @desc    View all Questionbanks by Subject
// @route   GET /qb/subject/:qsubject
router.get('/subject/:qsubject', ensureAuth, getAllQuestionBanksBySubject);

// @desc    View all Questionbanks by Topics
// @route   GET /qb/topic/:qtopic
router.get('/topic/:qtopic', ensureAuth, getAllQuestionBanksByTopic);

// @desc    View all Questionbank by id
// @route   GET /qb/id/:qid
router.get('/id/:qid', ensureAuth, getAllQuestionBankById);

// const Questionbank = require('../../models/QuestionBank'); 
// // test
// router.post('/', (req, res) =>{
//     const newQB = new Questionbank({
//         subject: req.body.subject,
//         topic: req.body.topic,
//         source: req.body.source,
//         college: req.body.college,
//         questions: req.body.questions
//     });
//     newQB.save().then(() => res.json({success: true}))
//     .catch(err => res.json({success:false, err}))
// });

module.exports = router;

