const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateEducationInput(data) {
    let errors = {};

    data.degree = !isEmpty(data.degree) ? data.degree : '';
    data.university = !isEmpty(data.university) ? data.university : '';
    data.college = !isEmpty(data.college) ? data.college : '';
    data.completed = !isEmpty(data.completed) ? data.completed : '';

    if (Validator.isEmpty(data.degree))
        errors.degree = 'Degree field is required';

    if (Validator.isEmpty(data.university))
        errors.university = 'University field is required';

    if (Validator.isEmpty(data.college))
        errors.college = 'college field is required';

    if (Validator.isEmpty(data.completed || data.completed === 'true' || data.completed === 'false'))
        errors.completed = 'completed field is required';
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};