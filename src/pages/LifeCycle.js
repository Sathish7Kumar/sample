import React, { Component } from 'react'

export default class LifeCycle extends Component {

  constructor(props){
    super(props);
    this.state = {
      count : 0
  }
  console.log("contructor Called");
  }

  componentDidMount(){
    console.log("component mounted");
  }

  componentDidUpdate (){
    console.log("component Update");
  }

  componentWillUnmount(){
    console.log("component unmounted");
  }


  increment = () =>{
    this.setState({count : this.state.count + 1 })
  }
  // decrement = () =>{
  //   if(this.state.count > 0){
  //     this.setState({count : this.state.count - 1 })
  //   }
  // }
  componentDidMount
  render() {
    console.log("Re-Rendering");
    return (
      <>
      <h1>Count LifeCycle : {this.state.count}</h1>
      <button onClick={this.increment}>Increment</button>
      {/* <button onClick={this.decrement}>Decrement</button> */}

      </>
    )
  }
}
