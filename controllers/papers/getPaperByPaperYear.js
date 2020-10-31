// Load Models
const User = require('../../models/User');
const Paper = require('../../models/Paper');

// validation
const isEmpty = require('../../validation/is-empty');

module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			Paper.find({ paperYear: req.params.ppy})
				.then(paper => {
					if(isEmpty(paper)){
						res.status(200).json({success: false, message: 'No Papers available'});
					}else{
						res.status(200).json({success: true, message: 'here is your Papers', paper});
					}
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to fetch Papers'}));
		})
		.catch(err => res.status(400).json({success: false, message: 'User invalid'}))
}