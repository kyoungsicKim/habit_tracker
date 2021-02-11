import React, { Component } from 'react';

export default class habit extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    // const habitName = this.props.habit.name;
    // const habitCount = this.props.habit.count;
    const { name, count } = this.props.habit;
    return (
      <li className='habit'>
        <span className='habit__name'>{name}</span>
        <span className='habit__count'>{count}</span>
        <button className='habit__btn habit--increase' onClick={this.handleIncrement}>
          <i className='fas fa-plus-square'></i>
        </button>
        <button className='habit__btn habit--decrease' onClick={this.handleDecrement}>
          <i className='fas fa-minus-square'></i>
        </button>
        <button className='habit__btn habit--delete' onClick={this.handleDelete}>
          <i className='fas fa-trash'></i>
        </button>
      </li>
    );
  }
}
