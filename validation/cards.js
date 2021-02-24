const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCardInput(data) {
    let errors = {};

    // data.lc_title = validText(data.lc_title) ? data.lc_title : '';
    // data.lc_difficulty = validText(data.lc_difficulty) ? data.lc_difficulty : '';
    // data.url = validText(data.url) ? data.url : '';
    data.notes = validText(data.notes) ? data.notes : '';


    if (Validator.isEmpty(data.probNum)) {
      errors.probNum = 'Please enter a problem number';
    }
    if (Validator.isEmpty(data.rating)) {
      errors.rating = 'Must choose a rating';
    }
    // if (Validator.isEmpty(data.url)) {
    //   errors.url = 'Something went wrong';
    // }
    // if (Validator.isEmpty(data.dueDate)) {
    //   errors.dueDate = 'Something went wrong';
    // }
    


    // if (Validator.isEmpty(data.lc_difficulty)) {
    //   errors.lc_difficulty = 'Difficulty field is required';
    // }

    // if (Validator.isEmpty(data.url)) {
    //   errors.url = 'URL is required';
    // }
    return {
      errors,
      isValid: Object.keys(errors).length === 0
    }
    
}