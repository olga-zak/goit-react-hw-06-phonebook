import { createAction } from '@reduxjs/toolkit';
import { FILTER_CONTACTS } from './filter-types';

// export const getFilterValue = filterQuery => {
//   return {
//     type: FILTER_CONTACTS,
//     payload: filterQuery,
//   };
// };
export const getFilterValue = createAction(FILTER_CONTACTS);
