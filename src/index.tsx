import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import colorsSlice from "./store/colors/slice";

const store = configureStore({
    reducer: {
        colors: colorsSlice.reducer
    }
});

export type State = ReturnType<typeof store.getState>

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
