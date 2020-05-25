import React, { Component } from "react";
import { render } from "react-dom";
import PeopleList from "./components/PeopleList";
import AddPersonForm from "./components/AddPersonForm";
import { createStore } from 'redux';
import {Provider} from 'react-redux'
import Hello from "./Hello";
import "./style.css";

const initialState = {
 contacts: ["James Baldwin", "Robert Calino", "Salsa Maya"]
}

function reducer(state = initialState, action){
  switch(action.type){
  case "ADD_PERSON":
  return{...state,
  contacts:
  [
    ...state.contacts, action.data
  ]
  }
  default:
  return state;
}
}
const store = createStore(reducer);
const hello = "Contact Manager";


render(
  <Provider store={store}>
  <Hello name={hello}/>
  <AddPersonForm />
  <PeopleList />
  </Provider>, document.getElementById("root"));
