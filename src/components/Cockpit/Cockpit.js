import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) =>{
	const assingClasses = [];
	let btnClass = '';
	if (props.showPersons) {
		btnClass = classes.red;	
	}
    if (props.persons.length <= 2){
      assingClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
      assingClasses.push(classes.bold);
    }

	return (
		<div className={classes.Cockpit}>
			<h1>Hi, I'm a React App</h1>
			<p className={assingClasses.join(' ')}> Si Funciona</p>
			<button className={btnClass}
				onClick={props.clicked}> Toggle Persons</button>
		</div>
	)
}
export default cockpit;