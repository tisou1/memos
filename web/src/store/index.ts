import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import layoutReducer from './reducer/layout'
import tagReducer from "./reducer/tag";

const store = configureStore({
  reducer: {
    tag: tagReducer,
    layout: layoutReducer
  },
})

type AppState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export default store
