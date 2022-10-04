import todoArr from "./modules/todoArr";
import title from "./modules/title";
import contents from "./modules/contents";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        todoArr: todoArr.reducer,
        title: title.reducer,
        contents: contents.reducer
    }
});

export default store;