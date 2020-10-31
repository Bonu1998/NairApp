const mongoose = require('mongoose');

const BooksSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
	subject:{
		type: String,
		required: true
	},
	topic:{
		type: String,
		required: true
    },
    description:{
        type: String,
        required:true
    },
    author:{
        type:[String],
        required: true
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

module.exports = mongoose.model('Books', BooksSchema);