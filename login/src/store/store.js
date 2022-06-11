import {combineReducers, legacy_createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { FeedReducer } from './Feed/FeedReducer'
import { LoginReducer } from './Login/LoginReducer'

const rootreducer=combineReducers({
    Login:LoginReducer,
    Feed:FeedReducer
})

export const store=legacy_createStore(rootreducer,applyMiddleware(thunk))