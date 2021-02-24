const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DeckSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            index: true        
        },
        name: {
            type: String,
            required: true
        },
        deckCards: [{ type: Schema.Types.ObjectId, ref: 'Card'}]
    }
)

module.exports = Deck = mongoose.model('Deck', DeckSchema);