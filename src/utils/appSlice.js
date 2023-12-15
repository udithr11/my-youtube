import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    userSearchQuery: "",
    searchCache:{},
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },

    searchClicked: (state, action) => {
      state.userSearchQuery = action.payload;
    },
    cached:(state,action)=>{
        state.searchCache={...state.searchCache,...action.payload};
    }
  },
});

export const { toggleMenu, closeMenu, searchClicked, cached } = appSlice.actions;
export default appSlice.reducer;
