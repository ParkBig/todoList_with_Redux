import {createSlice} from '@reduxjs/toolkit';

const contents = createSlice({
    name: 'contents',
    initialState: { value: "" },
    reducers: {
        revalueContents: (state, action) => {
            state.value = action.payload;
        }
    }// === contentsSlice.actions
});

export const {revalueContents} = contents.actions
export default contents;