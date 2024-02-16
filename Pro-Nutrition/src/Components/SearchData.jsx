import React,{Component} from 'react'

export default class Search extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <div className="Search">
        <input
          placeholder="Enter your meal"
          id="SearchBox"
          onChange={(e) => {
            this.props.input(e);
          }}
        />
      </div>
    )
  }
}