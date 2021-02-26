// returns the state's notes as an array of notes
export const getAllUserCards = ({ cards } = {}) => ( //TODO
  Object.keys(cards).map(id => cards[id])
)

// return an array of cards from a selectecd deck
export const getAllDeckCards = ({ cards }, rating ) => {
  return cards.all ? cards.all.filter(card => card.rating === rating) : [];
};

// return an array of cards with due date of today or earlier
export const getAllTodayCards = ({ cards }, date ) => {
  return cards.all ? cards.all.filter(card => Date.parse(card.dueDate) <= Date.parse(date)) : [];
};