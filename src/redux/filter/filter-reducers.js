import { createReducer } from '@reduxjs/toolkit';
//import { FILTER_CONTACTS } from './filter-types';
import { getFilterValue } from './filter-actions';
const filterInititalState = '';
// export const filterReducer = (state = '', { type, payload }) => {
//   switch (type) {
//     case FILTER_CONTACTS:
//       return payload;
//     default:
//       return state;
//   }
// };
export const filterReducer = createReducer(filterInititalState, {
  [getFilterValue]: (state, action) => {
    return action.payload;
  },
});
