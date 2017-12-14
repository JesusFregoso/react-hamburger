import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliar';
import withClass from '../hoc/withClass';

class App extends Component {
  state = {
    persons: [
      { id: 'asafaa1', name: 'Max', age:28 },
      { id: 'asaafaaswed', name: 'Manu', age:29 },
      { id: 'asafaqweq1', name: 'Jesus', age:23 }
    ],
    otherState: 'Some other value',
    showPersons : false
  }


  switchNameHandler = (newName) => {
    // console.log('Was Clicked!');
    //  DONT DO THIS: this.state.persons[0].name = 'Maximilian'
    this.setState({persons: [
      { name: newName, age:28 },
      { name: 'Manu', age:29 },
      { name: 'Jesus', age:24 }
    ]})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(item=>{
      return item.id === id;
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons}) 
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons});
  }

  render() {
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons  
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
        </div>
      );
    }

    return (
        <Aux>
          <Cockpit 
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}/>
          {persons}
        </Aux>
    );
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Primer Elemento Con React'))
  }
}

export default withClass(App,classes.App);
