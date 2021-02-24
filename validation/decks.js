const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateDeckInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';

    if (Validator.isEmpty(data.name)) {
        errors.name = 'Please enter a deck name';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}


