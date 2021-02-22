const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCardInput(data) {
    let errors = {};

    // data.lc_title = validText(data.lc_title) ? data.lc_title : '';
    // data.lc_difficulty = validText(data.lc_difficulty) ? data.lc_difficulty : '';
    // data.url = validText(data.url) ? data.url : '';
    // data.notes = validText(data.notes) ? data.notes : '';


    // if (Validator.isEmpty(data.title)) {
    //   errors.title = 'Title field is required';
    // }

    // if (Validator.isEmpty(data.number)) {
    //   errors.number = 'Number field is required';
    // }
    if (Validator.isEmpty(data.lc_number)) {
      errors.lc_number = 'LC Number field is required';
    }
    if (Validator.isEmpty(data.rating)) {
      errors.rating = 'Rating field is required';
    }

    // if (Validator.isEmpty(data.lc_difficulty)) {
    //   errors.lc_difficulty = 'Difficulty field is required';
    // }

    // if (Validator.isEmpty(data.url)) {
    //   errors.url = 'URL is required';
    // }

    
}