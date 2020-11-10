import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Provider} from "overmind-react";
import {overmind} from './Others/OvermindHelper'
import CounterDemo from "./Components/CounterDemo";
import {ThemeProvider} from '@material-ui/core/styles';
import {theme} from './Others/Theme'
import App from "./Components/App";
import TodoApp from "./Components/TodoApp";

ReactDOM.render(
    <React.StrictMode>
        <Provider value={overmind}>
            <ThemeProvider theme={theme}>
                <TodoApp />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
