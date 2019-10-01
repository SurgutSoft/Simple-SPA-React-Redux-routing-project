import { createStore } from 'redux';
import rootReducer from '../reducers/';
import { loadState } from './localstorage';


export default function() {

  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
