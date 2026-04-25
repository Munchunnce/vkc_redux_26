const { createSlice } = require("@reduxjs/toolkit");


// const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action){
            // old Redux
            // return [...state, action.payload] new array return
            state.push(action.payload);
        },
        remove(state, action){
            return state.filter(item => item._id !== action.payload);
        },
        ncrement: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    decrement: (state, action) => {
      const item = state.find((p) => p.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    }
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;