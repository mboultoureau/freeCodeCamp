import React from 'react';
import MainBox from './Components/MainBox';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      background: {
        authorName: '',
        authorURL: '',
        regularURL: '',
        fullURL: '',
        downloadURL: '',
        fullData: ''
      }
    };

    this.getNewBackground();
  }

  getNewBackground() {
    const headers = new Headers({
      'Accept-Version': 'v1',
      'Authorization': 'Client-ID 430a95267af3373d7ac4440c06068abf6a9495adef2e1b09135b95ee71157d69'
    });

    const parameters = {
      method: 'GET',
      headers: headers
    };

    fetch('https://api.unsplash.com/photos/random', parameters)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          background: {
            authorName: data.user.name,
            authorURL: data.user.links.html + '?utm_source=random_quote_machine&utm_medium=referral',
            regularURL: data.urls.regular,
            fullURL: data.urls.full,
            downloadURL: data.links.download_location,
            fullData: data,
          },
          isLoading: false
        });
      });
  }

  render() {
    let { authorName, authorURL, regularURL } = this.state.background;
    let unsplashURL = 'https://unsplash.com/?utm_source=random_quote_machine&utm_medium=referral';
    let isLoading = this.state.isLoading;
    let backgroundStyle = {
      background: `url(${regularURL}) no-repeat center fixed`,
      backgroundSize: 'cover'
    }

    if (isLoading) {
      return (
        <div className='App isLoading'>
          <MainBox />
          <div className='Credits'>Téléchargement de la photographie ⬇︎</div>
        </div>
      );
    } else {
      return (
        <div className='App' style={backgroundStyle}>
          <MainBox />
          <div className='Credits'>Photo by <a href={authorURL}>{authorName}</a> on <a href={unsplashURL}>Unsplash</a></div>
        </div>
      );
    }
  }
}

export default App;
