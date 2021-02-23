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
<<<<<<< HEAD
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
=======
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
>>>>>>> main
  },
  {
    timestamps: true
  },
<<<<<<< HEAD
  { strict: false }
);

CardSchema.index({ user: 1, lc_number: 1 }), { unique: true };
=======

);

// CardSchema.index({ user: 1, title: 1 }), { unique: true };
>>>>>>> main

module.exports = Card = mongoose.model('Card', CardSchema);
