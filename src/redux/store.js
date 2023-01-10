import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filter/filterSlice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// Создаем расширение стора чтобы добавить инструменты разработчика
//const enhancer = devToolsEnhancer();
//export const store = createStore(rootReducer, enhancer);
//export const store = createStore(persistedReducer, enhancer);
export const store = configureStore({
  reducer: { contacts: contactsReducer, filter: filterReducer },
});
//export const persistor = persistStore(store);
