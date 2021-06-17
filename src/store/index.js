import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './contactSlice'
import {combineReducers} from "redux";




const rootReducer = combineReducers({
    toolkit: contactReducer
})

export default  configureStore({
    reducer: rootReducer
})


