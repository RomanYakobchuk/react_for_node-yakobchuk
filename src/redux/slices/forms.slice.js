import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    forms: [], formForUpdate: null
}

const formsSlice = createSlice({
    name: "formsSlice",
    initialState,
    reducers: {
        addForm: (state, action) => {
                const {name, desc} = action.payload;
                const newForm = {name, desc, id: new Date().getTime()};
                state.forms.push(newForm);
        },

        deleteForm: (state, action) => {
            const {id} = action.payload;
            const index = state.forms.findIndex((form) => form.id === id);
            state.forms.splice(index, 1);

        },

        setFormForUpdate: (state, action) => {
            const {form} = action.payload;
            state.formForUpdate = form
        },

        updateForm: (state, action) => {
            const {id, name, desc} = action.payload;
            const index = state.forms.findIndex((form) => form.id === id);
            state.forms[index].name = name;
            state.forms[index].desc = desc;
            state.formForUpdate = false;
        }
    }
})
const {reducer, actions: { addForm, deleteForm, setFormForUpdate, updateForm }} = formsSlice;

export default reducer;

export const actionsForms = {
    addForm,
    deleteForm,
    setFormForUpdate,
    updateForm
}