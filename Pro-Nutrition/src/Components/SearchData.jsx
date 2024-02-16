import React,{Component} from 'react'

export default class Search extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <div className="Search">
        <h1>Track Your Meal</h1>
        <input
          placeholder="Enter your food item"
          id="SearchBox"
          onChange={(e) => {
            this.props.input(e);
          }}
        />
      </div>
    )
  }
}