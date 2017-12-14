import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliar';
import withClass from '../../../hoc/withClass';
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
		console.log('[UPDATE person.js] inside shouldComponentUpdate', nextProps, nextState);
		return true;
	}
	componentWillUpdate ( nextProps, nextState ) {
		console.log('[UPDATE person.js] inside componentWillUpdate', nextProps, nextState);
	}

	componentDidUpdate ( ) {
		console.log('[UPDATE person.js] inside componentDidUpdate');
	}

	componentWillMount () {
		console.log('[person.js] inside componentwillmount');
	}


	render () {
		return (
				<Aux>
					<p onClick={this.props.click}> I'm {this.props.name} and I am {this.props.age} years old!</p>
					<p onClick={this.props.click}>{this.props.children}</p>
					<input type="text" onChange={this.props.changed} value={this.props.name}/>
				</Aux>
			)	
	}
		
};

export default withClass(Person,classes.Person);