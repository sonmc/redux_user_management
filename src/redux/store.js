import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer'; 
import createSagaMiddleware from 'redux-saga'; 
import rootSaga from '../sagas/useSaga';
 
// Apply middleware
const sagaMiddleware = createSagaMiddleware();
// đăng kí reducer cho redux quản lí
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// Chạy middleware cho redux để chạy các effect taị dòng code
  
sagaMiddleware.run(rootSaga)
 
export default store;