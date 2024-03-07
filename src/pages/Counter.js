import React, { Component } from 'react'

 class Counter extends Component {

  state = {
    count : 0
}
handleClick = () =>{
    this.setState(
        {count : this.state.count + 1}
    )
}
  render() {
    
    return (
      <>
      <h1>Count Value : {this.state.count}</h1>
      <button onClick={this.handleClick}>Add</button>
      </>
    )
  }
}

export default Counter
