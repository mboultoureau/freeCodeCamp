import React from 'react';
import Loading from '../Loading';
import Quote from '../Quote';
import Share from '../Share';
import Toolbar from '../Toolbar';
import './style.css';

class MainBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isSharing: false,
            darkTheme: false,
            quote: {
                author: '',
                text: ''
            },
            background: {
                url: ''
            }
        };
        this.getNewQuote = this.getNewQuote.bind(this);
        this.toggleDarkTheme = this.toggleDarkTheme.bind(this);
        this.getNewQuote();
    }

    toggleDarkTheme() {
        this.setState({
            darkTheme: !this.state.darkTheme
        });
    }

    getNewQuote(update) {
        fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
            .then(response => response.json())
            .then(data => this.setState({
                quote: {
                    author: data[0].character,
                    text: data[0].quote
                },
                isLoading: false
            }));
    }

    share() {
        this.setState({
            isSharing: true
        });
    }

    render() {
        return (
            <div className={`Box ${this.state.isLoading ? 'isLoading' : ''} ${this.state.isSharing ? 'isSharing' : ''} ${this.state.darkTheme ? 'DarkTheme' : ''}`}>
                {this.state.isLoading ? <Loading /> : this.state.isSharing ? <Share /> : <Quote quote={this.state.quote} />}
                <Toolbar darkTheme={this.state.darkTheme} getNewQuote={this.getNewQuote} toggleDarkTheme={this.toggleDarkTheme} />
            </div>
        );
    }
}

export default MainBox;