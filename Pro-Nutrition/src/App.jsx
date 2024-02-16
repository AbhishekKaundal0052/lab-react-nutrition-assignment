import './App.css'
import React, { Component } from 'react'
import FoodData from './Components/FoodData'
import SearchData from './Components/SearchData'
import FoodBox from './Components/FoodBox'

class App extends Component {
  constructor() {
    super();
    this.state = {
      nutri: {
        Key: "",
        description: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      nutri: {
        Key: Date.now(),
        description: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <SearchData input={this.handleInput} />
        {FoodData.filter((e) => {
          if (this.state.nutri.description === "") {
            return e; 
          } else if (
            e.name.toLowerCase().includes(this.state.nutri.description.toLowerCase())
          ) {
            return e;
          }
          return false;
        }).map((e) => (
          <div className="eachElement" key={e.id}>
            <FoodBox foodData={e} input={this.handleInput}/>
          </div>
        ))}
      </div>
    );
  }
}
export default App