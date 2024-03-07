import React from 'react'
import './App.css';
import Mobile from './pages/Mobile';
import Cart from './pages/Cart';
import Counter from './pages/Counter';
import LifeCycle from './pages/LifeCycle';
class App extends React.Component{
  render(){
    return(
      <>
      <h1>Hello</h1>
      {/* <Mobile Mobilename="oneplus" />
      <Cart amount = "25000" deliveryTime = "ETA 2days"/>
      <Counter /> */}
      <LifeCycle />
      </>
    )
  }
}
export default App

// props = property
// func - class 

// state - class  - statefull component

// func - stateless component
// reactHooks -

// lifecycle - class component

// function reactHooks 