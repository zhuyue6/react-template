import {createSlice} from '@reduxjs/toolkit'

export const HomeSlice = createSlice({
  name: 'home',
  initialState: {
    user: 'zy'
  },
  reducers: {
    update(state, { payload }) {
      state.user = payload.user; 
    }
  }
 })

export const { update } = HomeSlice.actions

export interface IHomeModel  {
  user: string
}