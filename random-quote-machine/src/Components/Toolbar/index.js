import React from 'react';
import Button from '../Button';
import './style.css';

class Toolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            darkTheme: this.props.darkTheme
        };
    }

    render() {
        return (
            <div className='Toolbar'>
                <Button text='⟳' spin={true} handleClick={this.props.getNewQuote} />
                <Button text={this.state.darkTheme ? '🌞' : '🌛'} handleClick={this.props.toggleDarkTheme} />
                <Button text='💌' />
            </div>
        );
    }
}

export default Toolbar;