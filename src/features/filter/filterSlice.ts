import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterType = "all" | "easy" | "medium" | "hard";

interface FilterState {
    filter: FilterType;
  }
  
  const initialState: FilterState = {
    filter: 'all',
  };
  

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
