import React, { Component } from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      isLoggedIn: false
    }
  }
  
  toggleAuth = () => {
    this.setState((prevState, props) => ({ isLoggedIn: !prevState.isLoggedIn }))
  }

  
  render() {
    const { isLoggedIn } = this.state
    return (
      <div>
        <button onClick={this.toggleAuth}>{isLoggedIn ? 'Logout' : 'Login' }</button>
        <WrappedOne isLoggedIn={isLoggedIn} />
        <WrappedTwo isLoggedIn={isLoggedIn} />
        <WrappedThree isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

function AuthWrapper(WrappedComponent) {
  return class extends React.Component {
    render() {
      if (this.props.isLoggedIn) {
        return <WrappedComponent {...this.props} />
      }
      return <p>You're not logged in ☹️</p>
    }
  }
}

class RegularComponent extends React.Component {
  render() {
    return <p>hi</p>
  }
}

class OtherRegularComponent extends React.Component {
  render() {
    return <p>hello</p>
  }
}

const FunctionalComponent = () => (<p>Hi There</p>)

const WrappedOne = AuthWrapper(RegularComponent)
const WrappedTwo = AuthWrapper(OtherRegularComponent)
const WrappedThree = AuthWrapper(FunctionalComponent)

export default App;
