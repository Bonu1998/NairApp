const mongoose = require('mongoose');

const PaperSchema = mongoose.Schema({
	subject:{
		type: String,
		required: true
	},
    university:{
        type:String,
        required: true
    },
    course:{
        type:String,
        required: true
    },
    year:{
        type: Number,
        required: true
    },
    paperYear:{
        type: String,
        required: true
    },
	link:{
        type:String,
        required:true
    },
	date:{
		type: Date,
		required: true,
		default: Date.now
	}
});

module.exports = mongoose.model('Paper', PaperSchema);