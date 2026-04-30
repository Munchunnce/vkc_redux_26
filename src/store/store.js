import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import productReducer from './productSlice';
// Redux Persist Imports
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import { combineReducers } from "redux";


const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer,
    }
})

// Persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // only cart will be persisted
};

export default store;