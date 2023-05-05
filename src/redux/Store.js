import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './slices/movieSlice'

const store = configureStore({
  reducer:{
  likedmovies: movieSlice,
  }
})

export default store