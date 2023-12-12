import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

//Luodaan React komponentti, jota App.js käyttää.

import App from './App'
import './index.css'

//storen avulla voidaan käyttää Provider komponenttia, johon voi kääriä koko sovelluksen
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.getElementById('root'))