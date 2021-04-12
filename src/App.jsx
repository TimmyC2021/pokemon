import React, { Component } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import Card from './Components/Card/Card'

export default class App extends Component {

  constructor () {
    super();
    this.state= {
      chosenPokemon: null,
      names: []
    }
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=2000')
      .then(response => response.json())
      .then(response => {
        const result = response.results.map( poke => poke.name );

        return this.setState({ names: result})
      })
  }

fetchData(searchText) {
  if (searchText.target.value.length > 0) {
    fetch('https://pokeapi.co/api/v2/pokemon/'+searchText.target.value)
      .then(response => response.json())
      .then(response => {
        console.log("here's the response from the API");
        console.log(response);
        this.setState({
          chosenPokemon: response
        })
      })
      .catch(error => {
        console.log('Cant find pokemon with name ' + searchText.target.value);
      })
    } else {
      this.setState({
        chosenPokemon: null
      })
    }
}

  render() {
    return (
      <div >
        <div>
        <SearchBar namesList={this.state.names} fetchData={(e) => this.fetchData(e)}/>
        </div>
        <div>
        {this.state.chosenPokemon ?
                <Card pokemon={this.state.chosenPokemon}/>
                : null
        }
        </div>
      </div>
    )
  }
}
