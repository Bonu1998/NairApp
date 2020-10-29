const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
	user:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	text:{
		type: String,
		required: true
	},
	name:{
		type: String
	},
	image:{
		type: String
	},
	likes:[{
		user:{
			type: mongoose.Schema.Types.ObjectId,
			ref:'users'
		}
	}],
	comments:[{
		user:{
			type: mongoose.Schema.Types.ObjectId,
			ref:'users'
		},
		text:{
			type: String,
			required: true
		},
		name:{
			type: String
		},
		image:{
			type: String
		},
		date:{
			type: Date,
			default: Date.now
		}
	}],
	date:{
		type: Date,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model('Post', PostSchema);
