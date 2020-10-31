const mongoose = require('mongoose');

const QuestionBankSchema = mongoose.Schema({
	subject:{
		type: String,
		required: true
	},
	topic:{
		type: String,
		required: true
    },
    source:{
        type: [String],
        required:true
    },
    college:{
        type:String,
        required: true
    },
	questions:{
        type:[String],
        required:true
    },
	date:{
		type: Date,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model('QuestionBank', QuestionBankSchema);