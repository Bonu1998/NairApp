const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
	user:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	subject:{
		type: String,
		required: true
	},
	topic:{
		type: String,
		required: true
	},
	heading:{
		type: String
	},
	link:{
        type: String,
        required: true
	},
	date:{
		type: Date,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model('Notes', NotesSchema);
