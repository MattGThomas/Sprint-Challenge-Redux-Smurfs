import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { getSmurfs } from '../actions'
import SmurfsList from './SmurfsList'
import AddSmurfForm from './AddSmurfForm'

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }
  render() {
    if(this.props.gettingSmurfs) {
      return <h2>please wait, page loading...</h2>
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfsList smurfs={this.props.smurfs} />
        <AddSmurfForm smurfs={this.props.smurfs} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    gettingSmurfs: state.gettingSmurfs
  }
}
export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
