import {createSlice} from "@reduxjs/toolkit";

const quotes = [
    {text: "Deine Mutter ist fett!", author: "irgendein Teenie"},
    {text: "Deine Mutter heißt Kurt und ist der stärkste im Knast!", author: "der andere Teenie"},
    {text: "Schaffe schaffe, Häusle baue", author: "schwäbischer Nationalheld"},
    {text: "Talk to the hand!", author: "Arnie"},
    {text: "Das ist blaues Licht! und was macht es!?? - Es leuchtet blau...", author: "Sylvester Stalone"},
    {text: "I'll be back!", author: "Arnie"}
];

function getRandomQuote() {
    const randomQuote = Math.floor(Math.random() * quotes.length);
    return quotes[randomQuote];
}

const quoteSlice = createSlice({
    name: "quote",
    initialState: {
        current: getRandomQuote()
    },
    reducers: {
        getNewQuote: (state) => {
            state.current = getRandomQuote();
        }
    }
});

export const { getNewQuote } = quoteSlice.actions;
export default quoteSlice.reducer;