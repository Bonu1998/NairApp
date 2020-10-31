const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateNotesInput(data) {
    let errors = {};

    data.subject = !isEmpty(data.subject) ? data.subject : '';
    data.topic = !isEmpty(data.topic) ? data.topic : '';

    if (Validator.isEmpty(data.subject))
        errors.subject = 'Subject field is required';

    if (Validator.isEmpty(data.topic))
        errors.topic = 'Topic field is required';

    if (!isEmpty(data.link)) {
        if (!Validator.isURL(data.link)) {
            errors.link = 'Not a valid URL';
        }
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};
