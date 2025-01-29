import {configureStore} from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";

import booksReducer from '../feuters/books/booksSlice';

// export const store = configureStore({
//     reducer: {
//         books: booksReducer,
//     }
// });

export const store = configureStore({
    reducer: {
                books: booksReducer,
            },
            middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  })