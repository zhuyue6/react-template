import {configureStore} from '@reduxjs/toolkit'
import { HomeSlice } from './home';
import {PageSlice} from './page'

const store = configureStore({
  reducer: { 
    home: HomeSlice.reducer,
    page: PageSlice.reducer,
  }
})

export {
  store
}