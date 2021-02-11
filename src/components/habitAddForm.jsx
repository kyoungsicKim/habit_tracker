import React, { Component } from 'react';

class HabitAddForm extends Component {
  inputRef = React.createRef();
  onSubmit = (event) => {
    event.preventDefault();
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = '';
  };

  render() {
    return (
      <form className='add__form' onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type='text' className='form__input' placeholder='Please enter your habit! ' />
        <button className='form__btn' type='submit'>
          ADD
        </button>
      </form>
    );
  }
}

export default HabitAddForm;
