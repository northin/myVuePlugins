import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './clock';
import NameForm from './nameForm';
import registerServiceWorker from './registerServiceWorker';
import todoApp from "./redux/reducer.js"
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()
function configureStore(preloadedState) {
    return createStore(
      todoApp,
      preloadedState,
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )
}
let store =  configureStore()
// function tick(){
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('root')
);
    
// }
// tick()
registerServiceWorker();
