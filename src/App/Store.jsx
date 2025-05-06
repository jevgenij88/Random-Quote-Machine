import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "../features/quotes/quoteSlice.jsx";

export const store = configureStore({
    reducer: {
        quotes: quotesReducer,
    },
});