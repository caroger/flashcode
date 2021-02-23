const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      index: true
    },
    title: {
      type: String,
      lowercase: true,
      required: true,
      index: true
      // possible check for if question_name leads to valid url?
    },
    rating: {
      type: Number,
      required: true
    },
    dueDate: {
      type: Date,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    notes: {
      type: String
    },
    // lc_number: {
    //   type: Number,
    //   required: true,
    //   index: true
    // },
    // lc_title: {
    //   type: String,
    //   required: true
    // },
    // lc_difficulty: {
    //   type: String,
    //   required: true
    // },
    // tags: [{type: String}]
  },
  {
    timestamps: true
  },

);

// CardSchema.index({ user: 1, title: 1 }), { unique: true };

module.exports = Card = mongoose.model('Card', CardSchema);
