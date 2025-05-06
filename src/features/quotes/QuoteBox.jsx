import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getNewQuote} from "./quoteSlice.jsx";
import "/src/styles/index.css";

export default function QuoteBox() {

    const dispatch = useDispatch();
    const quote = useSelector((state) => state.quotes.current);

    return (
        <div id="quote-box">
            <p id="text">{quote.text}</p>
            <p id="author">- {quote.author}</p>
            <div className="buttons">
                <a
                    id="tweet-quote"
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" – ${quote.author}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Tweet
                </a>
                <button id="new-quote" onClick={() => dispatch(getNewQuote())}>new quote</button>
            </div>
        </div>
    )
};