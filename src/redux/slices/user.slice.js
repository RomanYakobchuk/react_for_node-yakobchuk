import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState = { //state
    users: [],
    status: null,
    formErrors: {}
};

const getAll = createAsyncThunk(
    'getAll',
    async () => {
        const {data} = await userService.getAll();
        return data.data
    }
);

const createAsync = createAsyncThunk(
    'createAsync',
    async ({user}, {dispatch ,rejectWithValue}) => {
        try {
            const {data} = await userService.create(user);
            // dispatch(create({}))
            dispatch(create({user: data}))

        } catch (e) {
            return rejectWithValue({status: e.message, formErrors: e.response.data})
        }
    }
)

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        create: (state, action) => {
            state.users.push(action.payload.user)
        }
    },
    extraReducers: {
        [getAll.pending]: (state, action) => {
            state.status = 'loading...'
        },
        [getAll.fulfilled]: (state, action) => {
            state.status = 'completed'
            state.users = action.payload
        },
        [getAll.rejected]: (state, action) => {
            state.status = 'rejected'

        },
        [createAsync.fulfilled]: (state, action) => {
            // state.users.push(action.payload)
            console.log('completed');
        },
        [createAsync.rejected]: (state, action) => {
            const {status, formErrors} = action.payload
            state.status = status
            // const newError = JSON.parse(action.payload.formErrors)
            // console.log((JSON.parse(action.payload.formErrors.error)))
            // console.log(JSON.parse(formErrors.error))
            console.log(formErrors)
            state.formErrors = formErrors
        },

    }
});

const {reducer: userReducer, actions: {create}} = userSlice;

const userActions = {
    getAll,
    createAsync
}

export {
    userReducer,
    userActions
}
