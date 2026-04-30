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
        clear() {
            return []; // Cart empty
        },
    }
})

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;