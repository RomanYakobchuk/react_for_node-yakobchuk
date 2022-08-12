import {combineReducers, configureStore} from "@reduxjs/toolkit";

import formsReducer from './slices/forms.slice';

const rootReducers = combineReducers({
    forms: formsReducer,
});

export const store = configureStore({
    reducer: rootReducers
});
