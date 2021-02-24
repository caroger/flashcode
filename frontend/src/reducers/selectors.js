// returns the state's notes as an array of notes
export const getAllUserCards = ({ cards } = {}) => (
  Object.keys(cards).map(_id => cards[_id])
)

// return an array of cards from a selectecd deck


// return an array of cards with due date of today or earlier