import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list-component";
import SearchBox from "./components/search-box/search-box-component";

const App = () => {
  // each element needs a separate useState
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState([]); // [value, setValue]

  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const handleSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>

      <SearchBox
        handleSearchChange={handleSearchChange}
        placeholder="search monster"
        className="monster-search-box"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => this.setState({ monsters: users }));
//   }

//   handleSearchChange = (event) => {
//     this.setState({ searchField: event.target.value });
//   }

//   render() {

//     const { monsters, searchField } = this.state;
//     const filteredMonsters = monsters.filter(monster =>
//       monster.name.toLowerCase().includes(searchField.toLowerCase())
//     );

//     return (
//       <div className="App">
//       <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox handleSearchChange={this.handleSearchChange} placeholder="search monster" className="monster-search-box"/>
//         <CardList monsters={filteredMonsters } />
//       </div>
//     )
//   }
// }

export default App;
