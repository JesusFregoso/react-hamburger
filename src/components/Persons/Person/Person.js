import React, { Component } from 'react';
import classes from './Person.css';
class Person extends Component {
	constructor (props){
		super(props);
		console.log('[person.js] inside contructor');
	}

	componentWillMount () {
		console.log('[person.js] inside componentWillMount');
	}

	componentDidMount () {
		console.log('[person.js] inside componentDidMount');
	}
	componentWillReceiveProps ( nextProps ) {
		console.log('[UPDATE person.js] inside componentWillReceiveProps', nextProps);
	}
	shouldComponentUpdate ( nextProps, nextState ) {
		console.log('[person.js] inside shouldComponentUpdate', nextProps, nextState);
		return true;
	}
	componentWillUpdate (nextProps) {
		console.log('[person.js] inside componentWillUpdate');
	}
	componentWillMount () {
		console.log('[person.js] inside componentwillmount');
	}
	componentWillMount () {
		console.log('[person.js] inside componentwillmount');
	}


	render () {
		return (
				<div className={classes.Person}>
					<p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
					<p onClick={this.props.click}>{this.props.children}</p>
					<input type="text" onChange={this.props.changed} value={this.props.name}/>
				</div>
			)	
	}
		
};

export default Person;