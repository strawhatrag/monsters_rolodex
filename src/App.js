import './App.css';
import { Component } from 'react';



class App extends Component {

  constructor(){
    super();

    this.state = {
     monsters:[]

    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }, () => {console.log(this.state)}));
  }


  render() {
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monster' onChange={() => {}}/>
        {this.state.monsters.map((monster) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    )
  }
}

export default App;
