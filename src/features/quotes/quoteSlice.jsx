import {createSlice} from "@reduxjs/toolkit";

const quotes = [
    { text: "I'll be back!", author: "Arnie" },
    { text: "May the Force be with you.", author: "Obi-Wan Kenobi" },
    { text: "Here's looking at you, kid.", author: "Rick Blaine" },
    { text: "You can't handle the truth!", author: "Col. Jessup" },
    { text: "Hasta la vista, baby.", author: "Terminator" },
    { text: "I see dead people.", author: "Cole Sear" },
    { text: "Why so serious?", author: "Joker" },
    { text: "I'm the king of the world!", author: "Jack Dawson" },
    { text: "Say hello to my little friend!", author: "Tony Montana" },
    { text: "You talking to me?", author: "Travis Bickle" },
    { text: "I am your father.", author: "Darth Vader" },
    { text: "To infinity and beyond!", author: "Buzz Lightyear" },
    { text: "Bond. James Bond.", author: "James Bond" },
    { text: "They may take our lives, but they'll never take our freedom!", author: "William Wallace" },
    { text: "I'm gonna make him an offer he can't refuse.", author: "Vito Corleone" },
    { text: "Life is like a box of chocolates.", author: "Forrest Gump" },
    { text: "Houston, we have a problem.", author: "Jim Lovell" },
    { text: "Just keep swimming.", author: "Dory" },
    { text: "There’s no place like home.", author: "Dorothy" },
    { text: "I feel the need… the need for speed!", author: "Maverick" },
    { text: "Here's Johnny!", author: "Jack Torrance" },
    { text: "I'm walking here!", author: "Ratso Rizzo" },
    { text: "You're gonna need a bigger boat.", author: "Brody" },
    { text: "This is Sparta!", author: "King Leonidas" },
    { text: "With great power comes great responsibility.", author: "Uncle Ben" },
    { text: "I'm vengeance.", author: "Batman" },
    { text: "Keep your friends close, but your enemies closer.", author: "Michael Corleone" },
    { text: "I drink your milkshake!", author: "Daniel Plainview" },
    { text: "Inconceivable!", author: "Vizzini" },
    { text: "I am Groot.", author: "Groot" },
    { text: "I volunteer as tribute!", author: "Katniss Everdeen" },
    { text: "You're breathtaking!", author: "Keanu Reeves (Cyberpunk Panel)" },
    { text: "Freedom!", author: "William Wallace" },
    { text: "I’m too old for this shit.", author: "Roger Murtaugh" },
    { text: "You're tearing me apart, Lisa!", author: "Johnny (The Room)" },
    { text: "Wakanda forever!", author: "T'Challa" },
    { text: "I'm the dude, so that's what you call me.", author: "The Dude" },
    { text: "Welcome to the party, pal!", author: "John McClane" },
    { text: "You either die a hero or live long enough to see yourself become the villain.", author: "Harvey Dent" },
    { text: "What we've got here is failure to communicate.", author: "Captain (Cool Hand Luke)" },
    { text: "You shall not pass!", author: "Gandalf" },
    { text: "I'm always angry.", author: "Bruce Banner" },
    { text: "That’s no moon…", author: "Obi-Wan Kenobi" },
    { text: "Do or do not. There is no try.", author: "Yoda" },
    { text: "It’s alive! It’s alive!", author: "Dr. Frankenstein" },
    { text: "This is the way.", author: "The Mandalorian" },
    { text: "We are Groot.", author: "Groot" },
    { text: "Cowabunga!", author: "Teenage Mutant Ninja Turtles" },
    { text: "Victory is mine!", author: "Stewie Griffin (ok, not a film 😅)" }
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
