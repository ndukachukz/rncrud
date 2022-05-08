import React from 'react';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import usersReducer from './reducers/Users';

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default ({children}) => <Provider store={store}>{children}</Provider>;
