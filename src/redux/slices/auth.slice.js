import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {authService, userService} from "../../services";

const initialState = {
    isAuth: null,
    loginError: null,
    registerError: null,
};

const login = createAsyncThunk(
    'login',
    async ({user}) => {
        const {data} = await authService.login(user);
        return data
    }
);


const register = createAsyncThunk(
    'register',
    async ({user}) => {
        const data = await userService.register(user);
        // console.log(data)
        const {response} = data;
        console.log(response)
        return response
    }
);
const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        setAuth: state => {
            state.isAuth = true
        },
        setError: state => {
            state.loginError = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true;
                state.loginError = false;
                const {user, access_token, refresh_token} = action.payload;
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('access_token', access_token);
                localStorage.setItem('refresh_token', refresh_token);
            })
            .addCase(login.rejected, (state, action) => {
                // console.log(action)
                state.isAuth = false;
                state.loginError = action?.error;
            })
            .addCase(register.fulfilled, (state, action) => {

            })
            .addCase(register.rejected, (state, action) => {
                state.isAuth = false;
                console.log(action)
                // state.registerError = action
            })

    }
});

const {reducer: authReducer, actions: {setAuth, setError}} = authSlice;

const authActions = {
    login,
    register,
    setAuth,
    setError,

}

export {
    authReducer,
    authActions
}