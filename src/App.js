import React, { Component } from 'react'
import './App.css'
import AdoptableDogs from './components/AdoptableDogs'
import FavoriteDogs from './components/FavoriteDogs'
import DogSpec from './components/DogSpec'

const base_url = 'https://dogs-backend.herokuapp.com/dogs'
class App extends Component {

  
  state = {
    dogs: [],
    favoriteDogs: [],
    slectedDog: null
    
  }

  componentDidMount () {
    fetch(base_url)
    .then(response => response.json())
    .then(dogs => this.setState({dogs}))


  }

  addFavoriteDog = dog => {
    if(!this.state.favoriteDogs.includes(dog)) {
    this.setState({favoriteDogs: [...this.state.favoriteDogs, dog]})
    }
  }

  removeFavoriteDog = dog => {
    const newFavoriteDogs = this.state.favoriteDogs.filter(favDog =>{
      return favDog !== dog
    })
    this.setState({favoriteDogs: newFavoriteDogs})
  }

  addSelectedDog = dog => {
    this.setState({ selectedDog: dog})
  }

  goBackToDogs = () => {
    this.setState({selectedDog: null})
  }
  
  render() {

  return (
    <div className='App'>
      <h1>Adoption Central</h1>
      <FavoriteDogs 
      dogAction={this.removeFavoriteDog}
      favoriteDogs={this.state.favoriteDogs}
      />
      {this.state.selectedDog
      ? <DogSpec 
        goBackToDogs={this.goBackToDogs}
        addFavoriteDog={this.addFavoriteDog}
        dog={this.state.selectedDog}

      />
      : <AdoptableDogs 
        dogAction={this.addSelectedDog}
        // dogAction={this.addFavoriteDog}
        dogs={this.state.dogs}
        />
      }
    </div>
  )

  }
}

export default App;
