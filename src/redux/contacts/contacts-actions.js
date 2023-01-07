import { createAction } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

// export const addContact = contact => {
//   return {
//     type: ADD_CONTACT,
//     payload: contact,
//   };
// };
export const addContact = createAction(ADD_CONTACT);

// export const deleteContact = contactId => {
//   return {
//     type: DELETE_CONTACT,
//     payload: contactId,
//   };
// };
export const deleteContact = createAction(DELETE_CONTACT);

// //=============== Before ========================
// const addTask = text => {
//   return { type: 'tasks/AddTask', payload: text };
// };
// console.log(addTask('Learn Redux Toolkit'));
// // {type: "tasks/addTask", payload: "Learn Redux Toolkit"}
// //=============== After ========================
// import { createAction } from '@reduxjs/toolkit';
// const addTask = createAction('tasks/AddTask');
// console.log(addTask('Learn Redux Toolkit'));
// // {type: "tasks/addTask", payload: "Learn Redux Toolkit"}
