import React from 'react';
import './style.css';

class Quote extends React.Component {
    getNewQuote(update) {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => update(data.content, data.author));
    }

    render() {
        let author = this.props.quote.author;
        let quote = this.props.quote.text;

        return (
            <div className='Quote'>
                <div className='Text'>
                    {quote}
                </div>
                <div className='Author'>
                    {author}
                </div>
            </div>
        );
    }
}

export default Quote;