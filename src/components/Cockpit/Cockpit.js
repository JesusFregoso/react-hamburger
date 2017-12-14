import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxiliar';


const cockpit = (props) =>{
	const assingClasses = [];
	let btnClass = classes.Button;
	if (props.showPersons) {
		btnClass = [classes.Button,classes.Red].join(' ');	
	}
    if (props.persons.length <= 2){
      assingClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
      assingClasses.push(classes.bold);
    }

	return (
		<Aux>
			<h1>Hi, I'm a React App</h1>
			<p className={assingClasses.join(' ')}> Si Funciona</p>
			<button className={btnClass}
				onClick={props.clicked}> Toggle Persons</button>
		</Aux>
	)
}
export default cockpit;