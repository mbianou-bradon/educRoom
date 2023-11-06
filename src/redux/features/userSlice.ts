import {UserModel} from './../../utils/types/userModel.type';
import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store/store';

interface userState {
  isAuth: boolean;
  currentUser: UserModel;
}

const initialState: userState = {
  isAuth: false,
  currentUser: {
    name: '',
    oAuthToken: '',
    profileImage: '',
    town: '',
    country: '',
    phoneNumber: '',
    email: '',
    id: '',
  },
};

export const createUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    globalAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    currentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    createNewUser: (
      state,
      action: PayloadAction<{key: keyof UserModel; value: any}>,
    ) => {
      const {key, value} = action.payload;
      state.newUser = {...state.newUser, [key]: value};
    },
  },
});

export const {globalAuth, currentUser, createNewUser} = createUserSlice.actions;
export default createUserSlice.reducer;
