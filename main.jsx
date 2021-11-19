import './style.css'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import App from './src/App';
import ReactDOM from 'react-dom'
import store from './src/redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('app')
  )