import React, {Component} from 'react';

import {Cardlist} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
   constructor(){
     super();
     this.state = {
       monsters: [],
       searchFiels: ''
     };
   }
   componentDidMount(){
     console.log('working')
     fetch('https://jsonplaceholder.typicode.com/users')
     .then( response => response.json() )
     .then(response => this.setState({monsters: response}))
     .catch(e => console.log(e))
       }
    
     handleChange = (e)=> {
      this.setState({searchFiels: e.target.value});
     }  
  render(){
    const {monsters, searchFiels} = this.state;
    const filterMonster = monsters.filter(monster =>
       monster.name.toLowerCase().includes(searchFiels.toLowerCase()));
    return (
      <div className="App">
        <h1 className="heading">Monsters Rolodex</h1>
        <SearchBox placeholder="search monsters" handleChange={this.handleChange} />
        <Cardlist monsters ={filterMonster} />
      </div>
    );
  }
}

export default App;
