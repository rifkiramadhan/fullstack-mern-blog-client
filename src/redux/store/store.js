import { configureStore } from '@reduxjs/toolkit';
import usersReducer from '../slices/users/usersSlices';
import categoriesReducer from '../slices/categories/categoriesSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    category: categoriesReducer,
  },
});

export default store;
