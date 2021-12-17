import { createStore, combineReducers } from 'redux';
import { memoReducer } from './reducers/memoReducer';
import { productsReducer } from './reducers/productsReducer';
//reducers 폴더에 있는 reducer 갖고와서 reducers로
export const reducers = combineReducers({
  //   count: counterReducer,
  memo: memoReducer,
  products: productsReducer,
});
//스토어 만들기
export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
