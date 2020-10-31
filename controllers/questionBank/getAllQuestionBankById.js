// Load Models
const User = require('../../models/User');
const QuestionBank = require('../../models/QuestionBank');

// validation
const isEmpty = require('../../validation/is-empty');

module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			QuestionBank.find({ id: req.params.qid})
				.then(qb => {
					if(isEmpty(qb)){
						res.status(200).json({success: false, message: 'No Question bank available'});
					}else{
						res.status(200).json({success: true, message: 'here is your Question bank', qb});
					}
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to fetch Question Bank'}));
		})
		.catch(err => res.status(400).json({success: false, message: 'User invalid'}))
}