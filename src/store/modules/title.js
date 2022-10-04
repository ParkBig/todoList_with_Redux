import {createSlice} from '@reduxjs/toolkit';

const title = createSlice({
    name: 'title',
    initialState: { value: "" },
    reducers: {
        revalueTitle: (state, action) => {
            state.value = action.payload;
        }
    }// === titleSlice.actions
});

export const {revalueTitle} = title.actions
export default title;