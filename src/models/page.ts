import {createSlice} from '@reduxjs/toolkit'

export const PageSlice = createSlice({
  name: 'page',
  initialState: {
    page: 'zy'
  },
  reducers: {
    update(state, { payload }) {
      state.page = payload.name; 
    }
  }
 })

export const { update } = PageSlice.actions

export interface IHomeModel  {
  user: string
}