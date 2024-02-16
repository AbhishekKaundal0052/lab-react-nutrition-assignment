import React, { Component } from 'react';
import Total from './Total';

export default class FoodBox extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            totalCal:0
        }
    }
    handleChange=(e)=>{
        this.setState({
            count:e.target.value
        })
    }

    handleSubmit =(e)=>{
        e.preventDefault();
        this.setState({
            totalCal:(this.props.foodData.cal*this.state.count)
        })
    }
    handleReset =(e)=>{
        e.preventDefault();
        this.setState({
            count:0,
            totalCal:0
        })
    }
  render() {
    return (
        <div className="box">
        
            <img src={this.props.foodData.img} key={this.props.foodData.id} />
         
        
              <p>
                <strong>{this.props.foodData.name}</strong> <br />
                <small>{this.props.foodData.cal}</small>
              </p>
        
               <div>
                <input className="input" type="number" value={this.state.count}  onChange={(e) => {this.handleChange(e)}}/>
             
              
                <button className="plus"   onClick={(e) => {this.handleSubmit(e)}}>
                  +
                </button>
                </div>
                <Total cal={this.state.count} totalCal={this.state.totalCal} name={this.props.foodData.name}/>
                
            
              <button className="button is-info"   onClick={(e) => {this.handleReset(e)}}>
                  Reset
                </button>
           
        </div>
    )
  }
}