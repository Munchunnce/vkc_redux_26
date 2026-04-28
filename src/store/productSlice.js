const { createSlice } = require("@reduxjs/toolkit");


// const initialState = [];

const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading'
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    reducers: {
        setProducts(state, action){
            state.data = action.payload;
        },
        
    }
})

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunk
export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res = await fetch('https://fakestoreapiserver.reactbd.org/api/products');
            const data = await res.json();
            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            console.log(err);
            dispatch(STATUSES.ERROR);
        }
    }
}