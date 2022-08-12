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

    }
});

const {reducer: userReducer, actions } = userSlice;

const userActions = {
    getAll
}

export {
    userReducer,
    userActions
}
