import React from 'react';
import './style.css';

class Quote extends React.Component {
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