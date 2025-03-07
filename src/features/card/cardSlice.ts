import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Card {
  id: number;
  number: number;
  isFlipped: boolean;
  isMatched: boolean;
}

interface CardsState {
  cards: Card[];
  flippedCards: { id: number; number: number }[];
  isDisabled: boolean;
}

const initialState: CardsState = {
  cards: [],
  flippedCards: [],
  isDisabled: false,
};

const generateCards = (): number[] => {
  const numbers: number[] = [];
  for (let i = 1; i <= 18; i++) {
    numbers.push(i, i);
  }
  return numbers.sort(() => Math.random() - 0.5);
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    initializeCards(state) {
      const cards = generateCards().map((number, index) => ({
        id: index,
        number,
        isFlipped: false,
        isMatched: false,
      }));
      state.cards = cards;
    },
    flipCard(state, action: PayloadAction<{ id: number; number: number }>) {
      if (state.isDisabled) return;

      const { id, number } = action.payload;
      const updatedCards = [...state.cards];
      updatedCards[id].isFlipped = true;
      state.cards = updatedCards;

      state.flippedCards.push({ id, number });
    },
    checkMatch(state) {
      if (state.flippedCards.length === 2) {
        state.isDisabled = true;

        const [firstCard, secondCard] = state.flippedCards;

        if (firstCard.number === secondCard.number) {
          state.cards = state.cards.map((card) =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isMatched: true, isFlipped: true }
              : card
          );
        } else {
          state.cards = state.cards.map((card) =>
            card.id === firstCard.id || card.id === secondCard.id
              ? { ...card, isFlipped: false }
              : card
          );
        }

        state.flippedCards = [];
        state.isDisabled = false;
      }
    },
    setAllMatched(state, action: PayloadAction<boolean>) {
      const allMatched = state.cards.every((card) => card.isMatched);
      if (allMatched) {
        action.payload = true;
      }
    }
  },
});

export const {
  initializeCards,
  flipCard,
  checkMatch,
  setAllMatched
} = cardsSlice.actions;

export default cardsSlice.reducer;
