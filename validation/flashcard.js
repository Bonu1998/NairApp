const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateFlashcardInput(data) {
    let errors = {};

    data.subject = !isEmpty(data.subject) ? data.subject : '';
    data.topic = !isEmpty(data.topic) ? data.topic : '';
    data.question = !isEmpty(data.question) ? data.question : '';

    if (Validator.isEmpty(data.subject))
        errors.subject = 'Subject field is required';

    if (Validator.isEmpty(data.topic))
        errors.topic = 'Topic field is required';

    if (Validator.isEmpty(data.question))
        errors.question = 'Question field is required';
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
