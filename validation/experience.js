const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = data => {
    let errors = {};

    data.whereAt = !isEmpty(data.whereAt) ? data.whereAt : '';
    data.duration = !isEmpty(data.duration) ? data.duration : '';
    data.designation = !isEmpty(data.designation) ? data.designation : '';

    if (Validator.isEmpty(data.whereAt))
        errors.whereAt = 'Where At Field is required';

    if (Validator.isEmpty(data.duration))
        errors.duration = 'Duration field is required';

    if (Validator.isEmpty(data.designation))
        errors.designation = 'Designation field is required';
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};