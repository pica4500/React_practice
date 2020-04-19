import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: [
        {
          name: '시오리',
          id: 'a'
        },
        {
          name: '사렌',
          id: 'b',
        },
        {
          name: '쿄우카',
          id: 'c'
        },
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.characters.map(character =>
            <h1 key={character.id}> {character.name} </h1>
          )
        }
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
