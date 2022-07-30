import {combineReducers, configureStore} from "@reduxjs/toolkit";
import counterReducer from "./slices/counter-slice";
import userReducer from "./slices/user-slice";

const rootReducers = combineReducers({
    counter: counterReducer,
    user: userReducer
});

const store = configureStore({
    reducer: rootReducers
});

export default store;