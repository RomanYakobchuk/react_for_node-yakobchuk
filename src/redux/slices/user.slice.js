import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {userService} from "../../services";

const initialState = { //state
    users: [],
    status: null
};

const getAll = createAsyncThunk(
    'getAll',
    async () => {
        const {data} = await userService.getAll();
        return data.data
    }
);

const create = createAsyncThunk(
    'create',
    async ({user}) => {
        const {data} = await userService.create(user);
        return data
    }
)

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {

    },
    extraReducers:{
        [getAll.pending]:(state, action) => {
            state.status = 'loading...'
        },
        [getAll.fulfilled]:(state, action) => {
            state.status = 'completed'
            state.users = action.payload
        },
        [getAll.rejected]:(state, action) => {
            state.status = 'rejected'

        },
        [create.fulfilled]:(state, action) => {
            state.users.push(action.payload)
        },
        [create.rejected]:(state, action) => {
            console.log('error');
        },

    }
});

const {reducer: userReducer, actions } = userSlice;

const userActions = {
    getAll,
    create
}

export {
    userReducer,
    userActions
}
