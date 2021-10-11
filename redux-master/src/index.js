import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// store 사용하기위해Provider 랑 store 필수로 임포트해오기
import { Provider } from 'react-redux';
import {store} from './redux/store'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);