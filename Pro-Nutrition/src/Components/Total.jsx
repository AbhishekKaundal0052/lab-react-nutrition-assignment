import React from "react";

export default class Total extends React.Component {
  constructor(props){
          super(props)
      }
    render() {
      return (
        <div className='totalCal'>
          <p>{this.props.cal} {this.props.name} = {this.props.totalCal} calories</p>
          
          <p></p>
        </div>
      )
    }
  }