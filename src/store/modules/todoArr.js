import {createSlice} from '@reduxjs/toolkit';

const todoArr = createSlice({
    name: 'todoArr',
    initialState: { value: [] },
    reducers: {
        revalueTodoArr: (state, action) => {
            (state.value).unshift(action.payload);
        },
        toggle: (state, action) => {
            state.value[action.payload].done = !state.value[action.payload].done;
        },
        deleteIndex: (state, action) => {
            (state.value).splice(action.payload,1);
        }
    }// === todoArrSlice.actions
});

export const {revalueTodoArr, toggle, deleteIndex} = todoArr.actions
export default todoArr;