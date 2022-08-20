import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices";

const rootReducers = combineReducers({
    auth: authReducer
});

const store = configureStore({
    reducer: rootReducers
});

export {
    store
}