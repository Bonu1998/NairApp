// Load Models
const User = require('../../models/User');
const Paper = require('../../models/Paper');

// validation
const isEmpty = require('../../validation/is-empty');

module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			Paper.find()
				.sort({date: -1})
				.then(papers => {
					if(isEmpty(papers)){
						res.status(200).json({success: false, message: 'No papers available'});
					}else{
						res.status(200).json({success: true, message: 'Here are your papers', papers});
					}
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to fetch papers'}));
		})
		.catch(err => res.status(400).json({success: false, message: 'User invalid'}))
}
