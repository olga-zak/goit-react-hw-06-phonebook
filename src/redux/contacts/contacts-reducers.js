import { createReducer } from '@reduxjs/toolkit';
//import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';
import { addContact, deleteContact } from './contacts-actions';
const initialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

//дестр. action -> {type, payload}
// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];

//     case deteleContact.type:
//       return state.filter(contact => contact.id !== action.payload);

//     default:
//       return state;
//   }
// };

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});
