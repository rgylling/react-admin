import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar';
import { toggleContent } from './actions/navbar';
import { connect } from 'react-redux';

class App extends Component {
	constructor(props){
		super(props)
		this.onChange = this.onChange.bind(this);
	}
	onChange(val){
		this.props.dispatch(toggleContent(val))
	}
  render() {
    return (
      <div>
		  <Navbar open={this.props.open} toggleChange={this.onChange} />
      </div>
    );
  }
}

const mapStateToProps = state => {
	return state
}

export default connect(mapStateToProps)(App);
