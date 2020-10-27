const mongoose = require('mongoose');

const FlashcardSchema = mongoose.Schema({
	// user:{
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'User'
	// },
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
	question:{
		type: String
	},
	answer:{
		type: String
	},
	date:{
		type: Date,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model('Flashcard', FlashcardSchema);
