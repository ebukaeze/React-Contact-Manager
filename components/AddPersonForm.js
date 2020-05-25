import React from 'react';
import { useState } from 'react';
import { connect }from'react-redux';
import { addPerson } from '../actions';


function AddPersonForm(props){
  const [person, setPerson]= useState('');

  function handleChange(e){
    setPerson(e.target.value);
  }
  function handleSubmit(e){
    if(person !== ''){
      props.addPerson(person);
      setPerson('');
    }
    e.preventDefault();
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label>Name:</label>
    <input type="text"
     placeholder="enter contact name"
     onChange={handleChange}value={person}/>
     <button type="submit">Add </button></form></div>
  )
}
const mapDispatchToProps = {
  addPerson
}
export default connect(null,mapDispatchToProps)(AddPersonForm)