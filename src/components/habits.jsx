import React, { Component } from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

class Habits extends Component {
  handleIncrement = (habit) => {
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (name) => {
    this.props.onAdd(name);
  };

  render() {
    return (
      <>
        <HabitAddForm onAdd={this.handleAdd}></HabitAddForm>
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              habit={habit}
              key={habit.id}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              onDelete={this.handleDelete}
              onAdd={this.handleAdd}
            ></Habit>
          ))}
        </ul>
        <button type='button' className='reset__btn' onClick={this.props.onReset}>
          RESET
        </button>
      </>
    );
  }
}

export default Habits;
