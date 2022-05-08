import {createSlice} from '@reduxjs/toolkit';
import data from '../../constants/data';

export const userSlice = createSlice({
  name: 'users',
  initialState: {value: data},
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
    removeUser: (state, action) => {
      state.value = state.value.filter(user => user.id !== action.payload.id);
    },
    updateUser: (state, action) => {
      state.value.map(user => {
        if (user.id === action.payload.id) user.name = action.payload.name;
      });
    },
  },
});

export const {addUser, removeUser, updateUser} = userSlice.actions;
export default userSlice.reducer;
