const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      index: true
    },
    lc_number: {
      type: Number,
      required: true,
      index: true
    },
    lc_title: {
      type: String,
      required: true,
    },
    lc_difficulty: {
      type: String,
      required: true
    },
    // title: {
    //   type: String,
    //   lowercase: true,
    //   required: true
    //   possible check for if question_name leads to valid url?
    // },
    url: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    notes: {
        type: String
    },
    // tag: {
    //     type: String,
    // }
    due_date: {
        type: Date,
        required: true
    }
  },
  {
    timestamps: true
  }
), {strict: false};

CardSchema.index({user: 1, lc_number: 1}), {unique: true};

module.exports = Card = mongoose.model('Card', CardSchema);
