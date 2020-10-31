// Load Models
const User = require('../../models/User');
const Notes = require('../../models/Notes');

// validation
const isEmpty = require('../../validation/is-empty');

module.exports = (req, res)=>{
	User.findById(req.user.id)
		.then(user => {
			Notes.findById(req.params.nid)
				.then(notes => {
					if(isEmpty(notes)){
						res.status(200).json({success: false, message: 'You have no notes yet'});
					}else{
						res.status(200).json({success: true, message: 'here is your notes', notes});
					}
				})
				.catch(err => res.status(500).json({success: false, message: 'Unable to fetch your notes'}));
		})
		.catch(err => res.status(400).json({success: false, message: 'User invalid'}))
}