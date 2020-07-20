import React from "react";
import quotes from "../quotes";

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quote: "",
            author: ""
        }

        this.newQuote = this.newQuote.bind(this);
        this.tweetQuote = this.tweetQuote.bind(this);
    }

    newQuote() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        const quoteData = quotes[getRandomInt(quotes.length)];

        this.setState({
            quote: quoteData.quote,
            author: quoteData.author
        });
    }

    componentDidMount() {
        this.newQuote();
    }

    tweetQuote() {
        window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + this.state.quote + '" ' + this.state.author));
    }

    render() {
        return (
            <div id="main">
                <div id="quote-box">
                    <h1 id="quote">{this.state.quote}</h1>
                    <p id="author">-{this.state.author}</p>
                    <div id="buttons">
                        <button className="btn" id="tweet-quote-btn" onClick={this.tweetQuote}>Tweet Quote</button>
                        <button className="btn" id="new-quote-btn" onClick={this.newQuote}>New Quote</button>
                    </div>
                </div>
                <p id="subtext">React random quote generator, by Timofey Cvetkov</p>
            </div>
        );
    }
}

export default QuoteBox;