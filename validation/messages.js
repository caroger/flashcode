const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateMessageInput(data) {
    let errors = {};

    data.content = validText(data.content) ? data.content : '';

    if (Validator.isEmpty(data.content)) {
        errors.content = 'Message field cannot be blank';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}