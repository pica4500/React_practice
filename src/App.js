import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [
        {
          name: '시오리',
          id: '1'
        },
        {
          name: '사렌',
          id: '2',
        },
        {
          name: '쿄우카',
          id: '3'
        },
        {
          name: '하츠네',
          id: '4'
        },
        {
          name: '캬루',
          id: '5'
        },
      ]
    }
  }

  // This code is studying about Promise.
  // fetch will return Promise. and then() will rap resolve.
  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then(response => response.json())
  //     .then(users => console.log(users))
  // }

  render() {
    return (
      <div className="App">
        <CardList characters={this.state.characters} />
      </div>
    );
  }
}

export default App;
